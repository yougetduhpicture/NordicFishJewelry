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
      <section className="hero">
        <img
          src="/images/hero/HERO WITH TEXT.png"
          alt="Nordic Fish Jewelry"
          className="hero__image"
        />
      </section>

      {/* CTA Buttons */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <div className="cta-buttons">
            <Link to={`${currentLang}/products`} className="cta-btn">
              {t('cta.collections')}
            </Link>
            <Link to={`${currentLang}/about`} className="cta-btn">
              {t('cta.story')}
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="section">
        <div className="brand-statement">
          <h3 className="brand-statement__text">{t('brandStatement')}</h3>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container container--content">
          <h2 className="section-title">{t('categories.title')}</h2>
          <div className="grid grid--products">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category.id} image={category.image} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
