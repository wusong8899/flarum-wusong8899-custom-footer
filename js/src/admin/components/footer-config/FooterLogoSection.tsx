import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';
import ImageEditor from '../common/ImageEditor';
import { FooterLogo } from '../common/FooterConfigTypes';

export interface FooterLogoSectionAttrs extends ComponentAttrs {
  footerLogo: FooterLogo;
  onUpdate: (footerLogo: FooterLogo) => void;
}

export default class FooterLogoSection extends Component<FooterLogoSectionAttrs> {
  view() {
    const { footerLogo, onUpdate } = this.attrs;

    return (
      <div className="FooterConfig-section FooterConfig-footerLogo">
        <h3>{app.translator.trans('wusong8899-custom-footer.admin.edit_footer.footer_logo')}</h3>
        
        <ImageEditor
          image={footerLogo}
          onUpdate={onUpdate}
          urlLabel={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.logo_url')}
          altLabel={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.logo_alt')}
          showPreview={true}
        />

        <div className="Form-group">
          <small className="help-block">
            {app.translator.trans('wusong8899-custom-footer.admin.edit_footer.footer_logo_help')}
          </small>
        </div>
      </div>
    );
  }
}