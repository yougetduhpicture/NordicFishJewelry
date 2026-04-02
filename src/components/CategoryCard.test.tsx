import { screen } from '@testing-library/react';
import { render } from '../test/utils';
import testI18n from '../test/i18n';
import CategoryCard from './CategoryCard';

describe('CategoryCard', () => {
  beforeEach(() => {
    testI18n.changeLanguage('en');
  });

  it('renders the category label', () => {
    render(<CategoryCard category="rings" image="/images/categories/rings.jpg" />);
    expect(screen.getByText('RINGS')).toBeInTheDocument();
  });

  it('links to the correct English path', () => {
    render(<CategoryCard category="rings" image="/images/categories/rings.jpg" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/products/rings');
  });

  it('links to the Finnish path when language is fi', () => {
    testI18n.changeLanguage('fi');
    render(<CategoryCard category="rings" image="/images/categories/rings.jpg" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/fi/products/rings');
  });

  it('renders the category image with correct src', () => {
    render(<CategoryCard category="necklaces" image="/images/categories/necklaces.jpg" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/categories/necklaces.jpg');
  });

  it('renders the correct label for each category', () => {
    const { rerender } = render(<CategoryCard category="cufflinks" image="/img.jpg" />);
    expect(screen.getByText('CUFF LINKS')).toBeInTheDocument();

    rerender(<CategoryCard category="necklaces" image="/img.jpg" />);
    expect(screen.getByText('NECKLACES')).toBeInTheDocument();
  });
});
