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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Split Background Images */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full">
            <img
              src="/images/hero/hero-left.jpg"
              alt="Nordic scenery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full">
            <img
              src="/images/hero/hero-right.jpg"
              alt="Finnish nature"
              className="w-full h-full object-cover -scale-x-100"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/30" />

        {/* Hero Content */}
        <div className="relative z-10 text-left px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-[0.15em] mb-8">
            <span className="block">NORDIC</span>
            <span className="block">FISH</span>
            <span className="block ">JEWELRY</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`${currentLang}/products`}
              className="bg-gold text-navy px-8 py-3 tracking-wider font-medium hover:bg-cream transition-colors"
            >
              {t('cta.collections')}
            </Link>
            <Link
              to={`${currentLang}/about`}
              className="bg-transparent border-2 border-gold text-gold px-8 py-3 tracking-wider font-medium hover:bg-gold hover:text-navy transition-colors"
            >
              {t('cta.story')}
            </Link>
          </div>
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
