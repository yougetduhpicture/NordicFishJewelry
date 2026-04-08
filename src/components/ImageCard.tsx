import { useTranslation } from 'react-i18next';
import type { Product } from '../types';

interface ImageCardProps {
  product: Product;
  onClick: () => void;
}

const ImageCard = ({ product, onClick }: ImageCardProps) => {
  const { i18n } = useTranslation();
  const productName = i18n.language === 'fi' ? product.nameFi : product.name;

  return (
    <article className="card card--clickable" onClick={onClick}>
      <figure className="card__image-wrapper">
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
      </figure>
      <div className="card__content">
        <h3 className="card__title">{productName}</h3>
      </div>
    </article>
  );
};

export default ImageCard;
