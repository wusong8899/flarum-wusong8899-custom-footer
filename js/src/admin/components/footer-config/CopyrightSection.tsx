import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';

export interface CopyrightSectionAttrs extends ComponentAttrs {
  copyrightText: string;
  onUpdate: (copyrightText: string) => void;
}

export default class CopyrightSection extends Component<CopyrightSectionAttrs> {
  view() {
    const { copyrightText, onUpdate } = this.attrs;

    return (
      <div className="FooterConfig-section FooterConfig-copyright">
        <h3>{app.translator.trans('core.admin.edit_footer.copyright')}</h3>
        
        <div className="Form-group">
          <label>{app.translator.trans('core.admin.edit_footer.copyright_text')}</label>
          <textarea
            className="FormControl"
            rows="4"
            value={copyrightText}
            placeholder={app.translator.trans('core.admin.edit_footer.copyright_placeholder')}
            onchange={(e: Event) => {
              const target = e.target as HTMLTextAreaElement;
              onUpdate(target.value);
            }}
          />
        </div>

        <div className="Form-group">
          <small className="help-block">
            {app.translator.trans('core.admin.edit_footer.copyright_help')}
          </small>
        </div>
      </div>
    );
  }
}