import app from 'flarum/admin/app';
import EditCustomFooterConfigModal from './components/EditCustomFooterConfigModal';

export { default as extend } from './extend';

app.initializers.add('wusong8899-custom-footer', () => {
  console.log('[wusong8899/flarum-custom-footer] Hello, admin!');

  // Register the footer config modal
  app.extensionData
    .for('wusong8899-custom-footer')
    .registerSetting({
      setting: 'wusong8899-custom-footer.config_button',
      type: 'button',
      label: app.translator.trans('wusong8899-custom-footer.admin.edit_footer.config_button'),
      className: 'Button Button--primary',
      onclick: () => app.modal.show(EditCustomFooterConfigModal)
    });
});
