import { useTranslation } from 'react-i18next';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const productName = i18n.language === 'fi' ? product.nameFi : product.name;

  return (
    <div className="card">
      {/* Image */}
      <div className="card__image-wrapper">
        <img
          src={product.image}
          alt={productName}
          className="card__image"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
        />
      </div>

      {/* Content */}
      <div className="card__content">
        <h3 className="card__title">{productName}</h3>
        <a
          href={product.etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          {t('products.viewOnEtsy')}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
