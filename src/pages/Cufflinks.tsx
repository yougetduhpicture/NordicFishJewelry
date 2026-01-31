import { useTranslation } from 'react-i18next';
import { ProductCard, SEO } from '../components';
import productsData from '../data/products.json';
import type { Product } from '../types';

const Cufflinks = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  const cufflinks = (productsData.products as Product[]).filter(
    (product) => product.category === 'cufflinks'
  );

  return (
    <>
      <SEO
        titleKey="seo.cufflinks.title"
        descriptionKey="seo.cufflinks.description"
        path={`${currentLang}/products/cufflinks`}
      />

      <section className="section section--full-height">
        <div className="container">
          <h1 className="page-title">{t('categories.cufflinks')}</h1>
          <div className="grid grid--products">
            {cufflinks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {cufflinks.length === 0 && <p className="empty-message">Products coming soon...</p>}
        </div>
      </section>
    </>
  );
};

export default Cufflinks;
