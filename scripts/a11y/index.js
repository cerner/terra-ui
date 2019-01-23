const fs = require('fs');
const util = require('util');
const puppeteer = require('puppeteer');
const axe = require('axe-core');
const axeReports = require('axe-reports');

const fileContents = fs.readFileSync('./dev-site-config/build/routeConfig.js').toString().split('export default');

const paths = [
  'https://engineering.cerner.com/terra-ui/#/home/terra-ui/index',
  'https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/what-is-terra',
];

const urls = [];
const prefixURL = 'https://engineering.cerner.com/terra-ui/#'

var stringContents = fileContents[1];

var words = stringContents.split(/'path': '/);

// add all the URLs from routeConfig.js to an array
for(i = 0; i < words.length; i++) {
  var url = words[i]
  var n = url.indexOf(/'/);
  url = url.substring(0, url.indexOf("'"));
  url = prefixURL + url;
  urls.push(url)
};

urls.shift(); //remove faulty firsty entry '{\n   }'

urls.push(paths[0]);  // add 2 urls not included in routeConfig.js
urls.push(paths[1]);

const results = [];
let axeResults;
let promise;
const time = process.hrtime();
puppeteer.launch().then(async (browser) => {
  const promises = [];
  console.log("Running...");
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    promise = await browser.newPage().then(async (page) => {
      await page.goto(`${url}`, {
                waitUntil: 'load',
            });
      // add axe-core to the pages
      await page.addScriptTag({
        path: require.resolve('axe-core')
      });
      console.log('[' + i + '/' + urls.length-1 + ']   ', url);
      // run axe on the page
      axeResults = await page.evaluate(async () => {
        return await axe.run(document, {
          runOnly: ['wcag2aa', 'section508'],
          resultTypes: ['violations']
        });
      });
      delete axeResults.incomplete;
      delete axeResults.inapplicable;
      delete axeResults.passes;
      // add results to the collection of axe results
      if (axeResults.violations.length !== 0) {
        if (i === 0) {
          axeReports.processResults(axeResults, 'csv', 'scripts/a11y/a11y-output-csv', true);
        } else {
          axeReports.processResults(axeResults, 'csv', 'scripts/a11y/a11y-output-csv');
        }
        results.push(axeResults);
      }
      await page.close();
    });
    promises.push(promise)
  }
  await Promise.all(promises)
  browser.close();
  //axeReports.processResults(promises, 'csv', '/scripts/a11y/test-results', true);

  // write output to file scripts/a11y/a11y-output.txt
  fs.writeFile("scripts/a11y/a11y-output-txt.txt", util.inspect(results, false, null, true), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log();
    console.log("Logs successfully outputted to: terra-core/scripts/a11y");
  });
  const diff = process.hrtime(time);
  console.log();
  console.log(`Script run time: ${diff[0]} seconds.`);
});
