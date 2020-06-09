import { Provider } from 'xfc';

Provider.init({
  acls: ['*'],
  secret: () => (Promise.resolve('Success')),
});
