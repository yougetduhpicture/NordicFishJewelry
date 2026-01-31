import { useTranslation } from 'react-i18next';
import { ProductCard, SEO } from '../components';
import productsData from '../data/products.json';
import type { Product } from '../types';

const Rings = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  const rings = (productsData.products as Product[]).filter(
    (product) => product.category === 'rings'
  );

  return (
    <>
      <SEO
        titleKey="seo.rings.title"
        descriptionKey="seo.rings.description"
        path={`${currentLang}/products/rings`}
      />

      <section className="section section--full-height">
        <div className="container">
          <h1 className="page-title">{t('categories.rings')}</h1>
          <div className="grid grid--products">
            {rings.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {rings.length === 0 && <p className="empty-message">Products coming soon...</p>}
        </div>
      </section>
    </>
  );
};

export default Rings;
