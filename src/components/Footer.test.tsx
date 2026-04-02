import { screen } from '@testing-library/react';
import { render } from '../test/utils';
import Footer from './Footer';

describe('Footer', () => {
  it('renders social section heading', () => {
    render(<Footer />);
    expect(screen.getByText('SOCIALS')).toBeInTheDocument();
  });

  it('renders Etsy link with correct href', () => {
    render(<Footer />);
    const etsyLink = screen.getByRole('link', { name: /etsy/i });
    expect(etsyLink).toHaveAttribute('href', 'https://www.etsy.com/shop/NordicFishJewelry');
    expect(etsyLink).toHaveAttribute('target', '_blank');
    expect(etsyLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Instagram link with correct href', () => {
    render(<Footer />);
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/nordicfishjewelry');
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders credit text', () => {
    render(<Footer />);
    expect(screen.getByText('WEBSITE BY RASMUS RUONAKOSKI')).toBeInTheDocument();
  });
});
