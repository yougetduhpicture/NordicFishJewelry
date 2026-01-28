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
    <Link
      to={`${currentLang}/products/${category}`}
      className="group block relative overflow-hidden border-4 border-navy"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={categoryLabels[category]}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Label */}
      <div className="bg-navy py-4 px-6">
        <h3 className="text-gold text-center text-lg tracking-[0.15em] font-medium">
          {categoryLabels[category]}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
