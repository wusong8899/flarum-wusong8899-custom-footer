export interface SupportLink {
  title: string;
  url: string;
}

export interface PlatformIcon {
  title: string;
  url: string;
  iconUrl: string;
}

export interface SocialLink {
  title: string;
  url: string;
  iconUrl: string;
}

export interface BrandAmbassador {
  imageUrl: string;
  socialLinks: SocialLink[];
}

export interface FooterLogo {
  imageUrl: string;
  altText: string;
}

export interface FooterConfig {
  supportLinks: SupportLink[];
  platformIcons: PlatformIcon[];
  platformLinks: PlatformIcon[];
  brandAmbassador: BrandAmbassador;
  footerLogo: FooterLogo;
  copyrightText: string;
}