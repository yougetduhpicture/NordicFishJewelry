import { useTranslation } from 'react-i18next';
import { CategoryCard, SEO } from '../components';
import type { Category } from '../types';

const categories: { id: Category; image: string }[] = [
  { id: 'rings', image: '/images/categories/rings.jpg' },
  { id: 'cufflinks', image: '/images/categories/cufflinks.jpg' },
  { id: 'necklaces', image: '/images/categories/necklaces.jpg' },
];

const Products = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  return (
    <>
      <SEO
        titleKey="seo.products.title"
        descriptionKey="seo.products.description"
        path={`${currentLang}/products`}
      />

      <section className="py-16 md:py-24 bg-cream min-h-[calc(100vh-16rem)]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-navy text-3xl md:text-4xl font-bold tracking-[0.15em] text-center mb-12">
            {t('products.title')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category.id}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
