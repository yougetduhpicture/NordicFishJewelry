import { useTranslation } from 'react-i18next';
import { SEO } from '../components';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  return (
    <>
      <SEO
        titleKey="seo.about.title"
        descriptionKey="seo.about.description"
        path={`${currentLang}/about`}
      />

      {/* Hero Section */}
      <section className="hero hero--overlay">
        <div className="hero__bg">
          <img src="/images/placeholder.jpg" alt="Our Jewelry" className="hero__bg-image" />
        </div>
        <div className="hero__overlay" >
        <h1 className="hero__title">{t('about.heroTitle')}</h1>
        </div>

      </section>

      {/* Intro Section */}
      <section className="section content-column">
        <div className="brand-statement">
          <h6 className="brand-statement__text">{t('about.intro')}</h6>
        </div>
      </section>

      {/* Crafting Process Section */}
      <section className="section content-column">
        <div className="container">
          <h2 className="section-title">{t('about.craftingProcess.title')}</h2>
            <div>
              <img
                src="/images/about/workshop.jpg"
                alt="Workshop"
                className="about-image"
                loading="lazy"
              />
            </div>
          <div className="grid grid--two-col content-column">
            <div>
              <ol className="about-steps">
                <li className="about-step">
                  <span className="about-step__number">1.</span>
                  <span className="about-step__text">{t('about.craftingProcess.step1')}</span>
                </li>
                <li className="about-step">
                  <span className="about-step__number">2.</span>
                  <span className="about-step__text">{t('about.craftingProcess.step2')}</span>
                </li>
                <li className="about-step">
                  <span className="about-step__number">3.</span>
                  <span className="about-step__text">{t('about.craftingProcess.step3')}</span>
                </li>
              </ol>
            </div>
             <div>
              <p className="about-text">{t('about.craftingProcess.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section content-column">
        <h2 className="section-title">{t('about.sustainability.title')}</h2>
        <div className="about-intro about-column">
          
          <p className="about-text">{t('about.sustainability.text')}</p>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('about.whoAreWe.title')}</h2>
          <div className="team-grid content-column">
            {/* Anne */}
            <div className="team-member">
              <div className="team-member__image-wrapper">
                <img
                  src="/images/about/anne.jpg"
                  alt="Photo of Anne"
                  className="team-member__image"
                  loading="lazy"
                />
              </div>
              <h3 className="team-member__name">{t('about.whoAreWe.anne.name')}</h3>
              <p className="team-member__bio">{t('about.whoAreWe.anne.bio')}</p>
            </div>

            {/* Arska */}
            <div className="team-member">
              <div className="team-member__image-wrapper team-member__image-wrapper">
                <img
                  src="/images/about/arska.jpg"
                  alt="Photo of Arska"
                  className="team-member__image"
                  loading="lazy"
                />
              </div>
              <h3 className="team-member__name">{t('about.whoAreWe.arska.name')}</h3>
              <p className="team-member__bio">{t('about.whoAreWe.arska.bio')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
