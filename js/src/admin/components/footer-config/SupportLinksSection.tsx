import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';
import ListManager from '../common/ListManager';
import LinkEditor from '../common/LinkEditor';
import { SupportLink } from '../common/FooterConfigTypes';

export interface SupportLinksSectionAttrs extends ComponentAttrs {
  links: SupportLink[];
  onUpdate: (links: SupportLink[]) => void;
}

export default class SupportLinksSection extends Component<SupportLinksSectionAttrs> {
  view() {
    const { links, onUpdate } = this.attrs;

    return (
      <div className="FooterConfig-section FooterConfig-supportLinks">
        <ListManager
          items={links}
          onUpdate={onUpdate}
          createItem={() => ({ title: '', url: '' })}
          renderItem={(link: SupportLink, index: number, updateItem: (link: SupportLink) => void, removeItem: () => void) => (
            <LinkEditor
              link={link}
              onUpdate={updateItem}
              onRemove={removeItem}
              titleLabel={app.translator.trans('core.admin.edit_footer.support_link_title')}
              urlLabel={app.translator.trans('core.admin.edit_footer.support_link_url')}
            />
          )}
          title={app.translator.trans('core.admin.edit_footer.support_links')}
          addButtonText={app.translator.trans('core.admin.edit_footer.add_support_link')}
          allowReorder={true}
        />
        
        <div className="Form-group">
          <small className="help-block">
            {app.translator.trans('core.admin.edit_footer.support_links_help')}
          </small>
        </div>
      </div>
    );
  }
}