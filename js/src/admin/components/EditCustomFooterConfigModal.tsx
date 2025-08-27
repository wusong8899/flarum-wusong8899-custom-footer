import app from 'flarum/admin/app';
import SettingsModal from 'flarum/admin/components/SettingsModal';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import { FooterConfig } from './common/FooterConfigTypes';
import { FooterConfigManager } from './common/FooterConfigManager';
import SupportLinksSection from './footer-config/SupportLinksSection';
import PlatformIconsSection from './footer-config/PlatformIconsSection';
import BrandAmbassadorSection from './footer-config/BrandAmbassadorSection';
import FooterLogoSection from './footer-config/FooterLogoSection';
import CopyrightSection from './footer-config/CopyrightSection';

export default class EditCustomFooterConfigModal extends SettingsModal {
  config: FooterConfig = FooterConfigManager.getDefaultConfig();
  activeTab: string = 'support-links';
  loading: boolean = true;
  saving: boolean = false;

  className() {
    return 'EditCustomFooterConfigModal Modal--large';
  }

  title() {
    return app.translator.trans('core.admin.edit_footer.config_title');
  }

  oninit(vnode: any) {
    super.oninit(vnode);
    this.loadConfig();
  }

  async loadConfig() {
    try {
      this.loading = true;
      this.config = FooterConfigManager.loadConfig();
    } catch (error) {
      console.error('Failed to load footer config:', error);
      app.alerts.show({ type: 'error' }, app.translator.trans('core.admin.edit_footer.load_error'));
    } finally {
      this.loading = false;
      m.redraw();
    }
  }

  form() {
    if (this.loading) {
      return [<LoadingIndicator />];
    }

    return [
      <div className="FooterConfig-container">
        {/* Tab Navigation */}
        <div className="FooterConfig-tabs">
          <nav className="FooterConfig-tabNav">
            {this.getTabs().map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`FooterConfig-tabBtn ${this.activeTab === tab.id ? 'FooterConfig-tabBtn--active' : ''}`}
                onclick={() => this.setActiveTab(tab.id)}
              >
                <i className={`fas ${tab.icon}`}></i>
                {tab.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="FooterConfig-tabContent">
          {this.renderTabContent()}
        </div>

        {/* Action Buttons */}
        <div className="FooterConfig-actions">
          <Button
            type="button"
            className="Button Button--danger"
            onclick={() => this.resetToDefaults()}
          >
            <i className="fas fa-undo"></i>
            {app.translator.trans('core.admin.edit_footer.reset_defaults')}
          </Button>
          
          <Button
            type="button"
            className="Button"
            onclick={() => this.previewFooter()}
          >
            <i className="fas fa-eye"></i>
            {app.translator.trans('core.admin.edit_footer.preview')}
          </Button>
        </div>
      </div>
    ];
  }

  getTabs() {
    return [
      {
        id: 'support-links',
        title: app.translator.trans('core.admin.edit_footer.tab_support_links'),
        icon: 'fa-link'
      },
      {
        id: 'platform-icons',
        title: app.translator.trans('core.admin.edit_footer.tab_platform_icons'),
        icon: 'fa-icons'
      },
      {
        id: 'platform-links',
        title: app.translator.trans('core.admin.edit_footer.tab_platform_links'),
        icon: 'fa-external-link-alt'
      },
      {
        id: 'brand-ambassador',
        title: app.translator.trans('core.admin.edit_footer.tab_brand_ambassador'),
        icon: 'fa-user-tie'
      },
      {
        id: 'footer-logo',
        title: app.translator.trans('core.admin.edit_footer.tab_footer_logo'),
        icon: 'fa-image'
      },
      {
        id: 'copyright',
        title: app.translator.trans('core.admin.edit_footer.tab_copyright'),
        icon: 'fa-copyright'
      }
    ];
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  renderTabContent() {
    switch (this.activeTab) {
      case 'support-links':
        return (
          <SupportLinksSection
            links={this.config.supportLinks}
            onUpdate={(links) => this.updateConfig({ supportLinks: links })}
          />
        );

      case 'platform-icons':
        return (
          <PlatformIconsSection
            icons={this.config.platformIcons}
            onUpdate={(icons) => this.updateConfig({ platformIcons: icons })}
            sectionTitle={app.translator.trans('core.admin.edit_footer.platform_icons')}
            helpText={app.translator.trans('core.admin.edit_footer.platform_icons_help')}
          />
        );

      case 'platform-links':
        return (
          <PlatformIconsSection
            icons={this.config.platformLinks}
            onUpdate={(links) => this.updateConfig({ platformLinks: links })}
            sectionTitle={app.translator.trans('core.admin.edit_footer.platform_links')}
            helpText={app.translator.trans('core.admin.edit_footer.platform_links_help')}
          />
        );

      case 'brand-ambassador':
        return (
          <BrandAmbassadorSection
            brandAmbassador={this.config.brandAmbassador}
            onUpdate={(brandAmbassador) => this.updateConfig({ brandAmbassador })}
          />
        );

      case 'footer-logo':
        return (
          <FooterLogoSection
            footerLogo={this.config.footerLogo}
            onUpdate={(footerLogo) => this.updateConfig({ footerLogo })}
          />
        );

      case 'copyright':
        return (
          <CopyrightSection
            copyrightText={this.config.copyrightText}
            onUpdate={(copyrightText) => this.updateConfig({ copyrightText })}
          />
        );

      default:
        return <div>Unknown tab</div>;
    }
  }

  updateConfig(updates: Partial<FooterConfig>) {
    this.config = { ...this.config, ...updates };
  }

  resetToDefaults() {
    if (confirm(app.translator.trans('core.admin.edit_footer.reset_confirm'))) {
      this.config = FooterConfigManager.getDefaultConfig();
      m.redraw();
    }
  }

  previewFooter() {
    const html = FooterConfigManager.generateFooterHtml(this.config);
    const previewWindow = window.open('', '_blank', 'width=800,height=600');
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
          <head>
            <title>${app.translator.trans('core.admin.edit_footer.preview_title')}</title>
            <style>
              body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
              ${this.getPreviewStyles()}
            </style>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `);
      previewWindow.document.close();
    }
  }

  getPreviewStyles() {
    // Return CSS styles for preview (simplified version of custom.less)
    return `
      .custom-footer {
        background: #1b2132;
        color: #fff;
        padding: 20px;
      }
      .footer-section {
        padding: 15px 40px 0;
      }
      .footer-layout-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 -10px;
      }
      .footer-layout-col {
        flex: 1 1 300px;
        margin-top: 20px;
      }
      .footer-title {
        margin-bottom: 16px;
        font-size: 13px;
        font-weight: 600;
        color: #7d8fd8;
      }
      .link-grid-2col {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px 15px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .platform-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .platform-grid a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #2a3244;
        border-radius: 50%;
      }
      .brand-ambassador {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .brand-image {
        width: 50%;
      }
      .footer-logo {
        width: 330px;
        margin: 20px 0 17px;
      }
      .footer-text {
        max-width: 700px;
        margin: 0 auto;
        font-size: 12px;
        color: #5d6782;
      }
    `;
  }

  async onsubmit(e: Event) {
    e.preventDefault();
    
    if (this.saving) return;
    
    this.saving = true;
    
    try {
      await FooterConfigManager.saveConfig(this.config);
      app.alerts.show({ type: 'success' }, app.translator.trans('core.admin.edit_footer.save_success'));
      this.hide();
    } catch (error) {
      console.error('Failed to save footer config:', error);
      app.alerts.show({ type: 'error' }, app.translator.trans('core.admin.edit_footer.save_error'));
    } finally {
      this.saving = false;
      m.redraw();
    }
  }

  submitButton() {
    return (
      <Button
        type="submit"
        className="Button Button--primary"
        loading={this.saving}
        disabled={this.saving}
      >
        {app.translator.trans('core.admin.save_changes')}
      </Button>
    );
  }
}