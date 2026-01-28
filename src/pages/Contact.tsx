import { useTranslation } from 'react-i18next';
import { SEO } from '../components';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  return (
    <>
      <SEO
        titleKey="seo.contact.title"
        descriptionKey="seo.contact.description"
        path={`${currentLang}/contact`}
      />

      <section className="py-16 md:py-24 bg-cream min-h-[calc(100vh-16rem)]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          {/* Contact Info Section */}
          <div className="text-center mb-16">
            <h1 className="text-gold text-3xl md:text-4xl font-bold tracking-[0.15em] mb-12">
              {t('contact.title')}
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-navy text-lg">
                <span className="font-bold tracking-wider">{t('contact.email')}</span>{' '}
                <a
                  href="mailto:contact@nordicfishjewelry.com"
                  className="text-gold hover:underline"
                >
                  X@MAIL.COM
                </a>
              </p>
              <p className="text-navy text-lg">
                <span className="font-bold tracking-wider">{t('contact.phone')}</span>{' '}
                <a href="tel:+358XXXXXXXX" className="text-gold hover:underline">
                  +358 XXXX XXXXX
                </a>
              </p>
              <p className="text-navy text-lg">
                <span className="font-bold tracking-wider">{t('contact.businessId')}</span>{' '}
                <span className="text-gold">Y-XXXXXX</span>
              </p>
            </div>

            <p className="text-gold text-xl tracking-wider font-medium">
              {t('contact.cta')}
            </p>
          </div>

          {/* Visit Us Section */}
          <div className="text-center">
            <h2 className="text-gold text-2xl md:text-3xl font-bold tracking-[0.15em] mb-8">
              {t('contact.visitUs.title')}
            </h2>

            {/* Map */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="aspect-video rounded-full overflow-hidden border-4 border-gold shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.8876159392868!2d24.96893!3d60.29123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5c1f5555555%3A0x5555555555555555!2sL%C3%A4hdepuistontie%2017%2C%2001230%20Vantaa%2C%20Finland!5e0!3m2!1sen!2sfi!4v1700000000000!5m2!1sen!2sfi"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nordic Fish Jewelry Location"
                />
              </div>
            </div>

            <p className="text-navy text-lg tracking-wider mb-2">
              {t('contact.visitUs.address').toUpperCase()}
            </p>
            <p className="text-navy">
              {t('contact.visitUs.bookTime')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
