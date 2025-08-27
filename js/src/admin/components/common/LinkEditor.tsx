import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';

export interface LinkData {
  title: string;
  url: string;
}

export interface LinkEditorAttrs extends ComponentAttrs {
  link: LinkData;
  onUpdate: (link: LinkData) => void;
  onRemove?: () => void;
  titleLabel?: string;
  urlLabel?: string;
  showRemove?: boolean;
}

export default class LinkEditor extends Component<LinkEditorAttrs> {
  view() {
    const { link, onUpdate, onRemove, showRemove = true } = this.attrs;
    const titleLabel = this.attrs.titleLabel || app.translator.trans('wusong8899-custom-footer.admin.edit_footer.link_title');
    const urlLabel = this.attrs.urlLabel || app.translator.trans('wusong8899-custom-footer.admin.edit_footer.link_url');

    return (
      <div className="FooterConfig-linkEditor">
        <div className="Form-group">
          <label>{titleLabel}</label>
          <input
            className="FormControl"
            type="text"
            value={link.title}
            placeholder={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.link_title_placeholder')}
            onchange={(e: Event) => {
              const target = e.target as HTMLInputElement;
              onUpdate({ ...link, title: target.value });
            }}
          />
        </div>
        
        <div className="Form-group">
          <label>{urlLabel}</label>
          <div className="FooterConfig-urlInput">
            <input
              className="FormControl"
              type="url"
              value={link.url}
              placeholder="https://example.com"
              onchange={(e: Event) => {
                const target = e.target as HTMLInputElement;
                onUpdate({ ...link, url: target.value });
              }}
            />
            {showRemove && onRemove && (
              <button
                type="button"
                className="Button Button--danger FooterConfig-removeBtn"
                onclick={onRemove}
                title={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.remove_link')}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}