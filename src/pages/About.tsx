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
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/hero.png"
            alt="Our Jewelry"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy/40" />
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-[0.15em]">
          {t('about.heroTitle')}
        </h1>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-navy text-lg md:text-xl leading-relaxed">
            {t('about.intro')}
          </p>
        </div>
      </section>

      {/* Crafting Process Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold text-2xl md:text-3xl font-bold tracking-[0.15em] mb-6">
                {t('about.craftingProcess.title')}
              </h2>
              <ol className="text-navy space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">1.</span>
                  <span className="tracking-wider">{t('about.craftingProcess.step1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">2.</span>
                  <span className="tracking-wider">{t('about.craftingProcess.step2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold font-bold">3.</span>
                  <span className="tracking-wider">{t('about.craftingProcess.step3')}</span>
                </li>
              </ol>
              <p className="text-navy leading-relaxed">
                {t('about.craftingProcess.description')}
              </p>
            </div>
            <div>
              <img
                src="/images/about/workshop.jpg"
                alt="Workshop"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-gold text-2xl md:text-3xl font-bold tracking-[0.15em] mb-6">
            {t('about.sustainability.title')}
          </h2>
          <p className="text-navy leading-relaxed">
            {t('about.sustainability.text')}
          </p>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h2 className="text-gold text-2xl md:text-3xl font-bold tracking-[0.15em] text-center mb-12">
            {t('about.whoAreWe.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Anne */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-48 h-64 mx-auto border-4 border-navy overflow-hidden">
                  <img
                    src="/images/about/anne.jpg"
                    alt="Anne"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-gold text-xl font-bold tracking-[0.15em] mb-4">
                {t('about.whoAreWe.anne.name')}
              </h3>
              <p className="text-navy text-sm leading-relaxed">
                {t('about.whoAreWe.anne.bio')}
              </p>
            </div>

            {/* Arska */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-48 h-64 mx-auto border-4 border-navy overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-navy text-sm">Photo coming soon</span>
                </div>
              </div>
              <h3 className="text-gold text-xl font-bold tracking-[0.15em] mb-4">
                {t('about.whoAreWe.arska.name')}
              </h3>
              <p className="text-navy text-sm leading-relaxed">
                {t('about.whoAreWe.arska.bio')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
