import { useTranslation } from 'react-i18next';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const productName = i18n.language === 'fi' ? product.nameFi : product.name;

  return (
    <div className="group border-4 border-navy overflow-hidden bg-white">
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
        />
      </div>

      {/* Content */}
      <div className="bg-navy p-4">
        <h3 className="text-gold text-center text-sm tracking-wider font-medium mb-3">
          {productName}
        </h3>
        <a
          href={product.etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gold text-navy text-center py-2 px-4 text-sm tracking-wider font-medium hover:bg-cream transition-colors"
        >
          {t('products.viewOnEtsy')}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
