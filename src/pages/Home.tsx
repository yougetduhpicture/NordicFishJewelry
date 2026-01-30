import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CategoryCard, SEO } from '../components';
import type { Category } from '../types';

const categories: { id: Category; image: string }[] = [
  { id: 'rings', image: '/images/categories/rings.jpg' },
  { id: 'cufflinks', image: '/images/categories/cufflinks.jpg' },
  { id: 'necklaces', image: '/images/categories/necklaces.jpg' },
];

const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  return (
    <>
      <SEO
        titleKey="seo.home.title"
        descriptionKey="seo.home.description"
        path={currentLang || '/'}
      />

      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <img
          src="/images/hero/HERO WITH TEXT.png"
          alt="Nordic Fish Jewelry"
          className="min-[1000px]:w-full min-[1000px]:h-auto w-auto h-[250px] sm:h-[300px] md:h-[350px] max-w-none object-cover object-center scale-105 origin-center"
        />
      </section>

      {/* CTA Buttons */}
      <section className="bg-cream py-8">
        <div className="w-[90%] md:w-[80%] lg:w-[50%] mx-auto flex flex-row gap-4">
          <Link
            to={`${currentLang}/products`}
            className="text-4xl bg-gold text-cream flex-1 aspect-square flex items-end justify-start p-4 tracking-wider hover:opacity-80 transition-opacity"
          >
            {t('cta.collections')}
          </Link>
          <Link
            to={`${currentLang}/about`}
            className="text-4xl bg-gold text-cream flex-1 aspect-square flex items-end justify-start p-4 tracking-wider hover:opacity-80 transition-opacity"
          >
            {t('cta.story')}
          </Link>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-navy text-lg md:text-xl leading-relaxed italic">
            {t('brandStatement')}
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h2 className="text-navy text-3xl md:text-4xl font-bold tracking-[0.15em] text-center mb-12">
            {t('categories.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Home;
