import React from 'react';
import Heading from 'terra-heading';
import Text from 'terra-text';
import List from 'terra-list';
import Dependency from './Dependency';

class WebpackConfiguration extends React.Component {
  render() {
    return (
      <div>
        <Heading level={3} >Webpack Configuration</Heading>
        <Text>In order to use any terra component, you must use <a href="https://github.com/webpack/webpack">webpack</a>. There are sereral loaders you will need in order to make it work.</Text>
        <List>
          <Dependency name={'webpack'} link={'https://github.com/webpack/webpack'} usage={'Webpack is a module bundler.'} />
        </List>

        <Heading level={4} >CSS plugins/loaders</Heading>
        <List>

          <Dependency name={'style-loader'} link={'https://github.com/webpack-contrib/style-loader'} usage={'Adds CSS to the DOM by injecting a <style> tag'} />
          <Dependency name={'css-loader'} link={'https://github.com/webpack-contrib/css-loader'} usage={'The css-loader interprets @import and url() like import/require() and will resolve them.'} />
          <Dependency name={'sass-loader'} link={'https://github.com/webpack-contrib/sass-loader'} usage={'Loads a SASS/SCSS file and compiles it to CSS.'} />
          <Dependency name={'postcss-loader'} link={'https://github.com/postcss/postcss-loader'} usage={'Transforms styles with JS plugins'} />
          <Dependency name={'autoprefixer'} link={'https://github.com/postcss/autoprefixer'} usage={'Plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use'} />
          <Dependency name={'postcss-rtl'} link={'https://github.com/vkalinichev/postcss-rtl'} usage={'Generates RTL rules with flipped properties. Use one file for both directions!'} />
          <Dependency name={'postcss-custom-properties'} link={'https://github.com/postcss/postcss-custom-properties'} usage={'Transforms W3C CSS Custom Properties for cascading variables'} />
          <Dependency name={'node-sass'} link={'https://github.com/sass/node-sass'} usage={'Allows native compilation of scss files.'} />
          <Dependency name={'extract-text-webpack-plugin'} link={'https://github.com/webpack-contrib/extract-text-webpack-plugin'} usage={'The extract-text-webpack-plugin moves all of the required css modules into their own seperate css file.'} />


        </List>

        <Heading level={4} >JS plugins/loaders</Heading>
        <List>
          <Dependency name={'babel-loader'} link={'https://github.com/babel/babel-loader'} usage={'Allows transpiling JavaScript files using Babel and webpack.'} />
          <Dependency name={'terra-i18n-plugin'} link={'https://github.com/cerner/terra-core/tree/master/packages/terra-i18n-plugin'} usage={'Examines dependencies for translations files then aggregates them into a single file per locale.'} />        
        </List>
      </div>
    );
  }
}

export default WebpackConfiguration;
