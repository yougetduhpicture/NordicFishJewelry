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

      <section className="section section--full-height">
        <div className="container content-column">
          {/* Contact Info Section */}
          <div className="contact-header">
            <h1 className="page-title">{t('contact.title')}</h1>

            <div className="contact-info contact-text-2col">
              <div className='contact-text-left'>
                 <p className="contact-item">
                  <span className="contact-label">{t('contact.email')}</span>{' '}
                </p>
                 <p className="contact-item">
                  <span className="contact-label">{t('contact.phone')}</span>{' '}
                </p>
                 <p className="contact-item">
                  <span className="contact-label">{t('contact.businessId')}</span>{' '}
                </p>


              </div>
              <div className='contact-text-right'>
                  <p className="contact-item">
                   <a href="mailto:contact@nordicfishjewelry.com" className="contact-link">
                    X@MAIL.COM
                   </a>
                  </p>
                  <p className="contact-item">
                     <a href="tel:+358XXXXXXXX" className="contact-link">
                       +358 XXXX XXXXX
                    </a>
                  </p>
                  <p className="contact-item">
                    <a className="contact-link">Y-XXXXXX</a>
                  </p>
              </div>
            </div>

            <p className="contact-cta">{t('contact.cta')}</p>
          </div>

          {/* Visit Us Section */}
          <div className="contact-visit content-column">
            <h2 className="contact-map__title">{t('contact.visitUs.title')}</h2>

            {/* Map */}
            <div className="contact-map">
              <div className="contact-map__wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.8876159392868!2d24.96893!3d60.29123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5c1f5555555%3A0x5555555555555555!2sL%C3%A4hdepuistontie%2017%2C%2001230%20Vantaa%2C%20Finland!5e0!3m2!1sen!2sfi!4v1700000000000!5m2!1sen!2sfi&z=8"
                  className="contact-map__iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nordic Fish Jewelry Location"
                />
              </div>
            </div>

            <p className="contact-address">{t('contact.visitUs.address').toUpperCase()}</p>
            <p className="contact-book">{t('contact.visitUs.bookTime')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
