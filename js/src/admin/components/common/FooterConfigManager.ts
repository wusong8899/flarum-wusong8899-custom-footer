import app from 'flarum/admin/app';
import { FooterConfig, SupportLink, PlatformIcon, SocialLink } from './FooterConfigTypes';
import { DEFAULT_FOOTER_CONFIG } from './FooterConfigDefaults';

export class FooterConfigManager {
  private static readonly SETTING_KEY = 'custom_footer_config';

  static loadConfig(): FooterConfig {
    try {
      const configStr = app.data.settings[this.SETTING_KEY];
      if (!configStr) {
        return this.getDefaultConfig();
      }

      const config = JSON.parse(configStr);
      return this.validateAndNormalize(config);
    } catch (error) {
      console.error('Failed to load footer config:', error);
      return this.getDefaultConfig();
    }
  }

  static saveConfig(config: FooterConfig): Promise<void> {
    try {
      const validatedConfig = this.validateAndNormalize(config);
      const configStr = JSON.stringify(validatedConfig);
      
      app.data.settings[this.SETTING_KEY] = configStr;
      
      return app.request({
        method: 'POST',
        url: app.forum.attribute('apiUrl') + '/settings',
        body: {
          [this.SETTING_KEY]: configStr
        }
      });
    } catch (error) {
      console.error('Failed to save footer config:', error);
      throw error;
    }
  }

  static getDefaultConfig(): FooterConfig {
    return JSON.parse(JSON.stringify(DEFAULT_FOOTER_CONFIG));
  }

  static validateAndNormalize(config: any): FooterConfig {
    const normalized: FooterConfig = {
      supportLinks: this.validateSupportLinks(config.supportLinks),
      platformIcons: this.validatePlatformIcons(config.platformIcons),
      platformLinks: this.validatePlatformIcons(config.platformLinks),
      brandAmbassador: this.validateBrandAmbassador(config.brandAmbassador),
      footerLogo: this.validateFooterLogo(config.footerLogo),
      copyrightText: this.validateCopyrightText(config.copyrightText)
    };

    return normalized;
  }

  private static validateSupportLinks(links: any): SupportLink[] {
    if (!Array.isArray(links)) {
      return DEFAULT_FOOTER_CONFIG.supportLinks;
    }

    return links.map((link: any) => ({
      title: this.validateString(link?.title, ''),
      url: this.validateUrl(link?.url, '#')
    })).filter(link => link.title || link.url !== '#');
  }

  private static validatePlatformIcons(icons: any): PlatformIcon[] {
    if (!Array.isArray(icons)) {
      return [];
    }

    return icons.map((icon: any) => ({
      title: this.validateString(icon?.title, ''),
      url: this.validateUrl(icon?.url, '#'),
      iconUrl: this.validateUrl(icon?.iconUrl, '')
    })).filter(icon => icon.title && icon.iconUrl);
  }

  private static validateBrandAmbassador(ambassador: any): FooterConfig['brandAmbassador'] {
    if (!ambassador || typeof ambassador !== 'object') {
      return DEFAULT_FOOTER_CONFIG.brandAmbassador;
    }

    return {
      imageUrl: this.validateUrl(ambassador.imageUrl, DEFAULT_FOOTER_CONFIG.brandAmbassador.imageUrl),
      socialLinks: this.validateSocialLinks(ambassador.socialLinks)
    };
  }

  private static validateSocialLinks(links: any): SocialLink[] {
    if (!Array.isArray(links)) {
      return DEFAULT_FOOTER_CONFIG.brandAmbassador.socialLinks;
    }

    return links.map((link: any) => ({
      title: this.validateString(link?.title, ''),
      url: this.validateUrl(link?.url, '#'),
      iconUrl: this.validateUrl(link?.iconUrl, '')
    })).filter(link => link.title && link.iconUrl);
  }

  private static validateFooterLogo(logo: any): FooterConfig['footerLogo'] {
    if (!logo || typeof logo !== 'object') {
      return DEFAULT_FOOTER_CONFIG.footerLogo;
    }

    return {
      imageUrl: this.validateUrl(logo.imageUrl, DEFAULT_FOOTER_CONFIG.footerLogo.imageUrl),
      altText: this.validateString(logo.altText, DEFAULT_FOOTER_CONFIG.footerLogo.altText)
    };
  }

  private static validateCopyrightText(text: any): string {
    return this.validateString(text, DEFAULT_FOOTER_CONFIG.copyrightText);
  }

  private static validateString(value: any, fallback: string): string {
    return typeof value === 'string' ? value.trim() : fallback;
  }

  private static validateUrl(value: any, fallback: string): string {
    if (typeof value !== 'string') {
      return fallback;
    }

    const trimmed = value.trim();
    
    // Allow empty strings for optional URLs
    if (trimmed === '' && fallback === '') {
      return '';
    }

    // Basic URL validation
    try {
      new URL(trimmed);
      return trimmed;
    } catch {
      // If not a valid absolute URL, check if it's a relative URL
      if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
        return trimmed;
      }
      return fallback;
    }
  }

  static generateFooterHtml(config: FooterConfig): string {
    return `
<footer id="customFooter" class="custom-footer">
  <section class="footer-section">
    <div class="footer-layout-row">
      <div class="footer-layout-col">
        <div>
          <h3 class="footer-title">支持</h3>
          <ul class="link-grid-2col">
            ${config.supportLinks.map(link => 
              `<li><a href="${this.escapeHtml(link.url)}" target="_blank">${this.escapeHtml(link.title)}</a></li>`
            ).join('\n            ')}
          </ul>
        </div>
        <div class="platform-section">
          <h3 class="footer-title">社群入口</h3>
          <ul class="platform-grid">
            ${config.platformIcons.map((icon, index) => 
              `<li><a href="${this.escapeHtml(icon.url)}" target="_blank" title="${this.escapeHtml(icon.title)}"><i class="u-sprites platform-icon-${index + 1}" style="background-image: url(${this.escapeHtml(icon.iconUrl)})"></i></a></li>`
            ).join('\n            ')}
          </ul>
          <div class="platform-links">
            ${config.platformLinks.map((link, index) => 
              `<a href="${this.escapeHtml(link.url)}" target="_blank" class="platform-link-${index + 1}" title="${this.escapeHtml(link.title)}" style="background-image: url(${this.escapeHtml(link.iconUrl)})"></a>`
            ).join('\n            ')}
          </div>
        </div>
      </div>
      <div class="footer-layout-col">
        <div>
          <h3 class="footer-title">老哥品牌代言人</h3>
          <div class="brand-ambassador">
            <div class="brand-names">
              <p>· 雅帝</p>
              <p>· 林帝</p>
              <p>· 文少</p>
            </div>
            <img class="brand-image" src="${this.escapeHtml(config.brandAmbassador.imageUrl)}" alt="品牌代言人">
            <ul class="brand-socials">
              ${config.brandAmbassador.socialLinks.map(link => 
                `<li><a href="${this.escapeHtml(link.url)}" target="_blank"><img src="${this.escapeHtml(link.iconUrl)}" alt="${this.escapeHtml(link.title)}"><span>群组</span></a></li>`
              ).join('\n              ')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="footer-divider"></div>
  <section class="footer-section footer-section-bottom">
    <img class="footer-logo" src="${this.escapeHtml(config.footerLogo.imageUrl)}" alt="${this.escapeHtml(config.footerLogo.altText)}">
    <div class="footer-text">
      <p>${this.escapeHtml(config.copyrightText)}</p>
    </div>
  </section>
</footer>`;
  }

  private static escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}