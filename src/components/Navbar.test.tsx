import { screen, fireEvent } from '@testing-library/react';
import { render } from '../test/utils';
import testI18n from '../test/i18n';
import Navbar from './Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    testI18n.changeLanguage('en');
  });

  it('renders the logo image', () => {
    render(<Navbar />);
    expect(screen.getByAltText('Nordic Fish Jewelry Logo')).toBeInTheDocument();
  });

  it('renders all desktop nav links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('HOME').length).toBeGreaterThan(0);
    expect(screen.getAllByText('COLLECTIONS').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ABOUT').length).toBeGreaterThan(0);
    expect(screen.getAllByText('CONTACT').length).toBeGreaterThan(0);
  });

  it('renders hamburger button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });

  it('opens mobile menu when hamburger is clicked', () => {
    render(<Navbar />);
    expect(document.querySelector('.mobile-menu')).not.toHaveClass('mobile-menu--open');
    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    expect(document.querySelector('.mobile-menu')).toHaveClass('mobile-menu--open');
  });

  it('closes mobile menu when hamburger is clicked again', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(hamburger);
    expect(document.querySelector('.mobile-menu')).toHaveClass('mobile-menu--open');
    fireEvent.click(hamburger);
    expect(document.querySelector('.mobile-menu')).not.toHaveClass('mobile-menu--open');
  });

  it('adds scrolled class when window is scrolled past threshold', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('navbar--scrolled');

    Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true });
    fireEvent.scroll(window);

    expect(nav).toHaveClass('navbar--scrolled');

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
  });

  it('renders Finnish nav links when language is fi', () => {
    testI18n.changeLanguage('fi');
    render(<Navbar />);
    expect(screen.getAllByText('ETUSIVU').length).toBeGreaterThan(0);
    expect(screen.getAllByText('KOKOELMAT').length).toBeGreaterThan(0);
  });
});
