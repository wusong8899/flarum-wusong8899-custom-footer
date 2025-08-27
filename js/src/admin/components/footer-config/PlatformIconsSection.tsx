import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';
import withAttr from 'flarum/common/utils/withAttr';
import ListManager from '../common/ListManager';
import ImageEditor from '../common/ImageEditor';
import { PlatformIcon } from '../common/FooterConfigTypes';

export interface PlatformIconsSectionAttrs extends ComponentAttrs {
  icons: PlatformIcon[];
  onUpdate: (icons: PlatformIcon[]) => void;
  sectionTitle?: string;
  helpText?: string;
}

export default class PlatformIconsSection extends Component<PlatformIconsSectionAttrs> {
  view() {
    const { icons, onUpdate, sectionTitle, helpText } = this.attrs;

    return (
      <div className="FooterConfig-section FooterConfig-platformIcons">
        <ListManager
          items={icons}
          onUpdate={onUpdate}
          createItem={() => ({ title: '', url: '', iconUrl: '' })}
          renderItem={(icon: PlatformIcon, index: number, updateItem: (icon: PlatformIcon) => void, removeItem: () => void) => (
            <div className="FooterConfig-platformIcon">
              <div className="Form-group">
                <label>{app.translator.trans('wusong8899-custom-footer.admin.edit_footer.platform_title')}</label>
                <input
                  className="FormControl"
                  type="text"
                  value={icon.title}
                  placeholder={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.platform_title_placeholder')}
                  oninput={withAttr('value', (value: string) => {
                    updateItem({ ...icon, title: value });
                  })}
                />
              </div>

              <div className="Form-group">
                <label>{app.translator.trans('wusong8899-custom-footer.admin.edit_footer.platform_url')}</label>
                <input
                  className="FormControl"
                  type="url"
                  value={icon.url}
                  placeholder="https://example.com"
                  oninput={withAttr('value', (value: string) => {
                    updateItem({ ...icon, url: value });
                  })}
                />
              </div>

              <ImageEditor
                image={{ imageUrl: icon.iconUrl, altText: icon.title }}
                onUpdate={(image) => updateItem({ ...icon, iconUrl: image.imageUrl })}
                urlLabel={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.platform_icon_url')}
                altLabel=""
                showPreview={true}
              />

              <div className="FooterConfig-itemActions">
                <button
                  type="button"
                  className="Button Button--danger"
                  onclick={removeItem}
                  title={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.remove_platform')}
                >
                  <i className="fas fa-trash"></i>
                  {app.translator.trans('wusong8899-custom-footer.admin.edit_footer.remove')}
                </button>
              </div>
            </div>
          )}
          title={sectionTitle || app.translator.trans('wusong8899-custom-footer.admin.edit_footer.platform_icons')}
          addButtonText={app.translator.trans('wusong8899-custom-footer.admin.edit_footer.add_platform_icon')}
          allowReorder={true}
        />
        
        {helpText && (
          <div className="Form-group">
            <small className="help-block">{helpText}</small>
          </div>
        )}
      </div>
    );
  }
}