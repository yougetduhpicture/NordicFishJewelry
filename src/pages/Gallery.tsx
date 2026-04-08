import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageCard, Lightbox, SEO } from '../components';
import { ETSY_SHOP_URL } from '../config';
import productsData from '../data/products.json';
import type { Product } from '../types';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <SEO
        titleKey="seo.gallery.title"
        descriptionKey="seo.gallery.description"
        path={`${currentLang}/gallery`}
      />

      <section className="section content-column">
        <h1 className="section-title">{t('gallery.title')}</h1>
        <div className="grid grid--products">
          {productsData.products.map((product) => (
            <ImageCard
              key={product.id}
              product={product as Product}
              onClick={() => setSelected(product as Product)}
            />
          ))}
        </div>
        <div className="gallery__cta">
          <a
            href={ETSY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--etsy"
          >
            {t('gallery.visitEtsy')}
          </a>
        </div>
      </section>

      {selected && (
        <Lightbox
          image={selected.image}
          alt={i18n.language === 'fi' ? selected.nameFi : selected.name}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default Gallery;
