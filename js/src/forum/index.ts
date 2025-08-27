import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('wusong8899-custom-footer', () => {
  console.log('[wusong8899/flarum-custom-footer] Hello, forum!');
});
