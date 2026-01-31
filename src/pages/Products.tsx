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

      <section className="section section--full-height">
        <div className="container">
          <h1 className="page-title">{t('products.title')}</h1>
          <div className="grid grid--products grid--narrow">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category.id} image={category.image} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
