const navConfig = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
      pageTypes: ['home'],
    }, {
      path: '/about',
      text: 'About',
      pageTypes: ['about'],
    }, {
    }, {
      path: '/application',
      text: 'Application',
      pageTypes: ['app'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/components',
      text: 'Components',
      pageTypes: ['doc'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/dev_tools',
      text: 'Developer Tools',
      pageTypes: ['tool'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/guides',
      text: 'Guides',
      pageTypes: ['guide'],
    }],
  },
};

module.exports = navConfig;
