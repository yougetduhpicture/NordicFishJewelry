import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  image: string;
}

const CategoryCard = ({ category, image }: CategoryCardProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  const categoryLabels: Record<Category, string> = {
    rings: t('categories.rings'),
    cufflinks: t('categories.cufflinks'),
    necklaces: t('categories.necklaces'),
  };

  return (
    <Link to={`${currentLang}/products/${category}`} className="card card--category">
      {/* Image */}
      <div className="card__image-wrapper">
        <img
          src={image}
          alt={categoryLabels[category]}
          className="card__image"
          loading="lazy"
        />
      </div>

      {/* Label */}
      <div className="card__content">
        <h3 className="card__title card__title--category">{categoryLabels[category]}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
