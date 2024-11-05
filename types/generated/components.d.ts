import type { Schema, Struct } from '@strapi/strapi';

export interface FooterCompany extends Struct.ComponentSchema {
  collectionName: 'components_footer_companies';
  info: {
    displayName: 'Company';
    icon: 'briefcase';
  };
  attributes: {
    LogoCompany: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Text: Schema.Attribute.Text;
  };
}

export interface FooterFooterComponents extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_components';
  info: {
    description: '';
    displayName: 'FooterComponents';
    icon: 'apps';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    company: Schema.Attribute.Component<'footer.company', false>;
    companyAddress: Schema.Attribute.RichText;
    copyright: Schema.Attribute.Text;
  };
}

export interface NavbarMenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'dashboard';
  };
  attributes: {
    subMenu: Schema.Attribute.Component<'navbar.sub-menu', true>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface NavbarNavbarComponents extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_components';
  info: {
    displayName: 'NavbarComponents';
    icon: 'apps';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menu: Schema.Attribute.Component<'navbar.sub-menu', true>;
  };
}

export interface NavbarSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_sub_menus';
  info: {
    description: '';
    displayName: 'subMenu';
    icon: 'grid';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface PageButton extends Struct.ComponentSchema {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface PageFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'faq';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface PageMediaSocial extends Struct.ComponentSchema {
  collectionName: 'components_page_media_socials';
  info: {
    displayName: 'MediaSocial';
    icon: 'earth';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface PageRelatedArticle extends Struct.ComponentSchema {
  collectionName: 'components_page_related_articles';
  info: {
    description: '';
    displayName: 'RelatedArticle';
    icon: 'attachment';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    IconImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.company': FooterCompany;
      'footer.footer-components': FooterFooterComponents;
      'navbar.menu': NavbarMenu;
      'navbar.navbar-components': NavbarNavbarComponents;
      'navbar.sub-menu': NavbarSubMenu;
      'page.button': PageButton;
      'page.faq': PageFaq;
      'page.media-social': PageMediaSocial;
      'page.related-article': PageRelatedArticle;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
