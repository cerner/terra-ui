const navConfig = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
      pageTypes: ['home'],
    }, {
      path: '/getting-started',
      text: 'Getting Started',
      pageTypes: ['guide'],
    }, {
      path: '/components',
      text: 'Components',
      pageTypes: ['doc'],
    }, {
      path: '/contributing',
      text: 'Contributing',
      pageTypes: ['contributing'],
    }, {
      path: '/issue-form',
      text: 'Issue Form',
      pageTypes: ['issueform'],
      isHidden: true,
    }],
  },
};

module.exports = navConfig;
