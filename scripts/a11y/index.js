const fs = require('fs');
const puppeteer = require('puppeteer');
const axe = require('axe-core');
const axeReports = require('axe-reports');

const fileContents = fs.readFileSync('./dev-site-config/build/routeConfig.js').toString().split('\n');

// Remove unuseful data from array
const filteredFileContents = fileContents
  .filter(i => !i.includes('import '))
  .filter(i => !i.includes('export default'))
  .filter(i => !i.includes("'componentClass'"))
  .filter(i => !i.includes("'props': void"))
  .filter(i => !i.includes("'content':"))
  .filter(i => !i.includes("'props': { 'src'"))
  .filter(i => !i.includes("'readme':"));

// Clean array to allow it to be parsed as JSON
const cleanedFileContents = filteredFileContents
  .join('')
  .toString()
  .replace(/\'/g, '"') // eslint-disable-line no-useless-escape
  .replace(/\n/g, '')
  .replace(/^/, '{')
  .replace(/};/, '');

const fileContentsObj = JSON.parse(cleanedFileContents);

// Create a set of unique URLS from routeConfig
const uniqueUrls = new Set();
Object.keys(fileContentsObj).forEach((key) => {
  if (fileContentsObj[key].path) {
    uniqueUrls.add(fileContentsObj[key].path);
  }
});

const csvFilePath = 'scripts/a11y/a11y-output-csv.csv';

// Delete CSV file if it exists
if (fs.existsSync(csvFilePath)) {
  fs.unlink(csvFilePath, (err) => {
    if (err) {
      return console.log(err); // eslint-disable-line no-console
    }
    console.log(`${csvFilePath} file deleted successfully`); // eslint-disable-line no-console
    return null;
  });
}

const prefixURL = 'https://engineering.cerner.com/terra-ui/#';
const urls = Array.from(uniqueUrls).map(route => prefixURL + route);

const results = new Set();
let axeResults;
let promise;
const time = process.hrtime();

puppeteer.launch().then(async (browser) => {
  const promises = [];

  console.log('Running...'); // eslint-disable-line no-console

  for (let k = 0; k < urls.length; k += 1) {
    const url = urls[k];
    /* eslint-disable no-await-in-loop, no-loop-func */
    promise = await browser.newPage().then(async (page) => {
      await page.goto(`${url}`, {
        waitUntil: 'load',
      });

      // add axe-core to the pages
      await page.addScriptTag({
        path: require.resolve('axe-core'),
      });

      console.log(`[${k}/${urls.length - 1}]   `, url); // eslint-disable-line no-console

      // run axe on the page
      // eslint-disable-next-line arrow-body-style
      axeResults = await page.evaluate(async () => {
        // eslint-disable-next-line no-return-await
        return await axe.run(document, {
          runOnly: ['wcag2aa', 'section508'],
          resultTypes: ['violations'],
        });
      });

      delete axeResults.inapplicable;
      delete axeResults.passes;

      // add results to the collection of axe results
      if (axeResults.violations.length !== 0) {
        if (k === 0) {
          axeReports.processResults(axeResults, 'csv', 'scripts/a11y/a11y-output-csv', true);
        } else {
          axeReports.processResults(axeResults, 'csv', 'scripts/a11y/a11y-output-csv');
        }
        results.add(axeResults);
      }
      await page.close();
    });

    /* eslint-disable no-await-in-loop, no-loop-func */
    promises.push(promise);
  }
  // eslint-disable-next-line compat/compat
  await Promise.all(promises);
  browser.close();

  const diff = process.hrtime(time);
  console.log(`\nScript run time: ${diff[0]} seconds.`); // eslint-disable-line no-console
});
