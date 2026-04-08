import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components';

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
      <section className="cta-section content-column">
        <div className="cta-section__inner">
          <div className="cta-buttons">
            <Link to={`${currentLang}/gallery`} className="cta-btn">
              {t('cta.collections')}
            </Link>
            <Link to={`${currentLang}/about`} className="cta-btn">
              {t('cta.story')}
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="section content-column">
        <div className="brand-statement">
          <h3 className="brand-statement__text">{t('brandStatement')}</h3>
        </div>
      </section>
    </>
  );
};

export default Home;
