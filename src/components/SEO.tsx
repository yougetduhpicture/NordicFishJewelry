import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  path: string;
  image?: string;
}

const SEO = ({ titleKey, descriptionKey, path, image = '/images/logo/logo.png' }: SEOProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const baseUrl = 'https://nordicfishjewelry.com';

  const title = t(titleKey);
  const description = t(descriptionKey);
  const canonicalUrl = `${baseUrl}${path}`;
  const alternateEnUrl = `${baseUrl}${path.replace('/fi', '')}`;
  const alternateFiUrl = `${baseUrl}/fi${path.replace('/fi', '')}`;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={alternateEnUrl} />
      <link rel="alternate" hrefLang="fi" href={alternateFiUrl} />
      <link rel="alternate" hrefLang="x-default" href={alternateEnUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:locale" content={currentLang === 'fi' ? 'fi_FI' : 'en_US'} />
      <meta property="og:site_name" content="Nordic Fish Jewelry" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
