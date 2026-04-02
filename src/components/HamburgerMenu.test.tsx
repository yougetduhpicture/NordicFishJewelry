import { screen, fireEvent } from '@testing-library/react';
import { render } from '../test/utils';
import HamburgerMenu from './HamburgerMenu';

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/products', label: 'COLLECTIONS' },
  { path: '/about', label: 'ABOUT' },
];

describe('HamburgerMenu', () => {
  it('does not have open class when closed', () => {
    render(<HamburgerMenu isOpen={false} onClose={vi.fn()} navLinks={navLinks} />);
    expect(document.querySelector('.mobile-menu')).not.toHaveClass('mobile-menu--open');
  });

  it('has open class when isOpen is true', () => {
    render(<HamburgerMenu isOpen={true} onClose={vi.fn()} navLinks={navLinks} />);
    expect(document.querySelector('.mobile-menu')).toHaveClass('mobile-menu--open');
  });

  it('renders all nav links', () => {
    render(<HamburgerMenu isOpen={true} onClose={vi.fn()} navLinks={navLinks} />);
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('COLLECTIONS')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
  });

  it('calls onClose when a link is clicked', () => {
    const onClose = vi.fn();
    render(<HamburgerMenu isOpen={true} onClose={onClose} navLinks={navLinks} />);
    fireEvent.click(screen.getByText('HOME'));
    expect(onClose).toHaveBeenCalled();
  });

  it('marks the active link based on current path', () => {
    // MemoryRouter defaults to '/', so HOME should be active
    render(<HamburgerMenu isOpen={true} onClose={vi.fn()} navLinks={navLinks} />);
    const homeLink = screen.getByText('HOME').closest('a');
    const collectionsLink = screen.getByText('COLLECTIONS').closest('a');
    expect(homeLink).toHaveClass('mobile-menu__link--active');
    expect(collectionsLink).not.toHaveClass('mobile-menu__link--active');
  });
});
