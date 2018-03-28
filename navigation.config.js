import Home from './src/Home/Index';
import GettingStarted from './src/GettingStarted/Index';
import GettingStartedNav from './src/GettingStarted/Nav';

const navConfig = {
  rootPath: '/site',
  navigation: {
    index: '/site/home',
    links: [{
      path: '/site/home',
      text: 'Home',
      exampleType: 'home',
      component: Home,
    }, {
      path: '/site/getting-started',
      text: 'Getting Started',
      component: GettingStarted,
      menuComponent: GettingStartedNav,
      exampleType: 'custom',
      hasSubNav: true,
    }, {
      path: '/site/components',
      text: 'Components',
      exampleType: 'pages',
      hasSubNav: true,
    }],
  },
};

export default navConfig;
