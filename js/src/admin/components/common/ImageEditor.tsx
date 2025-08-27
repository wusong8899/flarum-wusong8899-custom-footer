import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';

export interface ImageData {
  imageUrl: string;
  altText: string;
}

export interface ImageEditorAttrs extends ComponentAttrs {
  image: ImageData;
  onUpdate: (image: ImageData) => void;
  urlLabel?: string;
  altLabel?: string;
  showPreview?: boolean;
}

export default class ImageEditor extends Component<ImageEditorAttrs> {
  view() {
    const { image, onUpdate, showPreview = true } = this.attrs;
    const urlLabel = this.attrs.urlLabel || app.translator.trans('core.admin.edit_footer.image_url');
    const altLabel = this.attrs.altLabel || app.translator.trans('core.admin.edit_footer.image_alt');

    return (
      <div className="FooterConfig-imageEditor">
        <div className="Form-group">
          <label>{urlLabel}</label>
          <input
            className="FormControl"
            type="url"
            value={image.imageUrl}
            placeholder="https://example.com/image.png"
            onchange={(e: Event) => {
              const target = e.target as HTMLInputElement;
              onUpdate({ ...image, imageUrl: target.value });
            }}
          />
        </div>

        <div className="Form-group">
          <label>{altLabel}</label>
          <input
            className="FormControl"
            type="text"
            value={image.altText}
            placeholder={app.translator.trans('core.admin.edit_footer.image_alt_placeholder')}
            onchange={(e: Event) => {
              const target = e.target as HTMLInputElement;
              onUpdate({ ...image, altText: target.value });
            }}
          />
        </div>

        {showPreview && image.imageUrl && (
          <div className="Form-group">
            <label>{app.translator.trans('core.admin.edit_footer.preview')}</label>
            <div className="FooterConfig-imagePreview">
              <img
                src={image.imageUrl}
                alt={image.altText}
                style={{ maxWidth: '200px', maxHeight: '100px', objectFit: 'contain' }}
                onload={(e: Event) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                }}
                onerror={(e: Event) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML += `<div class="FooterConfig-imageError">${app.translator.trans('core.admin.edit_footer.image_load_error')}</div>`;
                }}
                style={{ opacity: '0', transition: 'opacity 0.3s' }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}