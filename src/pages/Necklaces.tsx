import { useTranslation } from 'react-i18next';
import { ProductCard, SEO } from '../components';
import productsData from '../data/products.json';
import type { Product } from '../types';

const Necklaces = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  const necklaces = (productsData.products as Product[]).filter(
    (product) => product.category === 'necklaces'
  );

  return (
    <>
      <SEO
        titleKey="seo.necklaces.title"
        descriptionKey="seo.necklaces.description"
        path={`${currentLang}/products/necklaces`}
      />

      <section className="section section--full-height">
        <div className="container">
          <h1 className="page-title">{t('categories.necklaces')}</h1>
          <div className="grid grid--products">
            {necklaces.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {necklaces.length === 0 && <p className="empty-message">Products coming soon...</p>}
        </div>
      </section>
    </>
  );
};

export default Necklaces;
