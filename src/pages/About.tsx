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
      <section className="hero">
        <div className="hero__bg">
          <img src="/images/about/banner.jpg" alt="Our Jewelry" className="hero__bg-image" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section content-column">
        <h1 className="section-title">{t('about.heroTitle')}</h1>
        <div className="about-intro about-column">
          {t('about.intro').split('\n\n').map((paragraph, index) => (
            <p key={index} className="about-text">{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Crafting Process Section */}
      <section className="section content-column">
          <h2 className="section-title">{t('about.craftingProcess.title')}</h2>
          <div className="about-intro about-column">
            <p className="about-text">{t('about.craftingProcess.text')}</p>
          </div>
          <img
            src="/images/about/anne-korupajalla.jpg"
            alt="Anne working in the jewelry workshop"
            className="about-workshop-image"
            loading="lazy"
          />
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
            <article className="team-member">
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
            </article>

            {/* Arska */}
            <article className="team-member">
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
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
