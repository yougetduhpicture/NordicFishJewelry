import { screen, fireEvent } from '@testing-library/react';
import { render } from '../test/utils';
import testI18n from '../test/i18n';
import ProductCard from './ProductCard';
import type { Product } from '../types';

const mockProduct: Product = {
  id: 'ring-1',
  name: 'Silver Ring',
  nameFi: 'Hopeasormus',
  category: 'rings',
  image: '/images/products/rings/ring-1.jpg',
  etsyUrl: 'https://www.etsy.com/listing/123',
};

describe('ProductCard', () => {
  beforeEach(() => {
    testI18n.changeLanguage('en');
  });

  it('renders the English product name', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Silver Ring')).toBeInTheDocument();
  });

  it('renders the Finnish product name when language is fi', () => {
    testI18n.changeLanguage('fi');
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Hopeasormus')).toBeInTheDocument();
  });

  it('renders the product image with correct src and alt', () => {
    render(<ProductCard product={mockProduct} />);
    const img = screen.getByAltText('Silver Ring');
    expect(img).toHaveAttribute('src', '/images/products/rings/ring-1.jpg');
  });

  it('renders the Etsy link with correct href and rel', () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole('link', { name: /VIEW ON ETSY/i });
    expect(link).toHaveAttribute('href', 'https://www.etsy.com/listing/123');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('falls back to placeholder image on error', () => {
    render(<ProductCard product={mockProduct} />);
    const img = screen.getByAltText('Silver Ring') as HTMLImageElement;
    fireEvent.error(img);
    expect(img.src).toContain('/images/placeholder.jpg');
  });
});
