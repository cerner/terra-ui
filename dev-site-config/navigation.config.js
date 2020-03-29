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
      path: '/guides',
      text: 'Guides',
      pageTypes: ['guide'],
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
      path: '/dev_environment',
      text: 'Dev Environment',
      pageTypes: ['env'],
      capabilities: {
        devTools: true,
      },
    }],
  },
};

module.exports = navConfig;
