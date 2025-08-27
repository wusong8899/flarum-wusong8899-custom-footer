import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';
import ListManager from '../common/ListManager';
import ImageEditor from '../common/ImageEditor';
import { BrandAmbassador, SocialLink } from '../common/FooterConfigTypes';

export interface BrandAmbassadorSectionAttrs extends ComponentAttrs {
  brandAmbassador: BrandAmbassador;
  onUpdate: (brandAmbassador: BrandAmbassador) => void;
}

export default class BrandAmbassadorSection extends Component<BrandAmbassadorSectionAttrs> {
  view() {
    const { brandAmbassador, onUpdate } = this.attrs;

    return (
      <div className="FooterConfig-section FooterConfig-brandAmbassador">
        <h3>{app.translator.trans('core.admin.edit_footer.brand_ambassador')}</h3>
        
        {/* Brand ambassador image */}
        <div className="Form-group">
          <label>{app.translator.trans('core.admin.edit_footer.ambassador_image')}</label>
          <ImageEditor
            image={{ imageUrl: brandAmbassador.imageUrl, altText: '品牌代言人' }}
            onUpdate={(image) => onUpdate({ ...brandAmbassador, imageUrl: image.imageUrl })}
            urlLabel={app.translator.trans('core.admin.edit_footer.ambassador_image_url')}
            altLabel=""
            showPreview={true}
          />
        </div>

        {/* Social links */}
        <div className="FooterConfig-socialLinks">
          <ListManager
            items={brandAmbassador.socialLinks}
            onUpdate={(socialLinks) => onUpdate({ ...brandAmbassador, socialLinks })}
            createItem={() => ({ title: '', url: '', iconUrl: '' })}
            renderItem={(link: SocialLink, index: number, updateItem: (link: SocialLink) => void, removeItem: () => void) => (
              <div className="FooterConfig-socialLink">
                <div className="FooterConfig-socialLinkInputs">
                  <div className="Form-group">
                    <label>{app.translator.trans('core.admin.edit_footer.social_title')}</label>
                    <input
                      className="FormControl"
                      type="text"
                      value={link.title}
                      placeholder={app.translator.trans('core.admin.edit_footer.social_title_placeholder')}
                      onchange={(e: Event) => {
                        const target = e.target as HTMLInputElement;
                        updateItem({ ...link, title: target.value });
                      }}
                    />
                  </div>

                  <div className="Form-group">
                    <label>{app.translator.trans('core.admin.edit_footer.social_url')}</label>
                    <input
                      className="FormControl"
                      type="url"
                      value={link.url}
                      placeholder="https://example.com"
                      onchange={(e: Event) => {
                        const target = e.target as HTMLInputElement;
                        updateItem({ ...link, url: target.value });
                      }}
                    />
                  </div>

                  <ImageEditor
                    image={{ imageUrl: link.iconUrl, altText: link.title }}
                    onUpdate={(image) => updateItem({ ...link, iconUrl: image.imageUrl })}
                    urlLabel={app.translator.trans('core.admin.edit_footer.social_icon_url')}
                    altLabel=""
                    showPreview={true}
                  />
                </div>

                <div className="FooterConfig-itemActions">
                  <button
                    type="button"
                    className="Button Button--danger"
                    onclick={removeItem}
                    title={app.translator.trans('core.admin.edit_footer.remove_social_link')}
                  >
                    <i className="fas fa-trash"></i>
                    {app.translator.trans('core.admin.edit_footer.remove')}
                  </button>
                </div>
              </div>
            )}
            title={app.translator.trans('core.admin.edit_footer.social_links')}
            addButtonText={app.translator.trans('core.admin.edit_footer.add_social_link')}
            allowReorder={true}
          />
        </div>

        <div className="Form-group">
          <small className="help-block">
            {app.translator.trans('core.admin.edit_footer.brand_ambassador_help')}
          </small>
        </div>
      </div>
    );
  }
}