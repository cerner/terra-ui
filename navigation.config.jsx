import Home from './src/Home/Index';
import GettingStarted from './src/GettingStarted/Index';

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
    }, {
      path: '/site/components',
      text: 'Components',
      exampleType: 'pages',
      hasSubNav: true,
    }],
  },
};

export default navConfig;
