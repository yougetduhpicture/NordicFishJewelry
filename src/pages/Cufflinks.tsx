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

      <section className="py-16 md:py-24 bg-cream min-h-[calc(100vh-16rem)]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-navy text-3xl md:text-4xl font-bold tracking-[0.15em] text-center mb-12">
            {t('categories.cufflinks')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cufflinks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {cufflinks.length === 0 && (
            <p className="text-navy text-center text-lg">
              Products coming soon...
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Cufflinks;
