import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  path: string;
  label: string;
}

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const HamburgerMenu = ({ isOpen, onClose, navLinks }: HamburgerMenuProps) => {
  const location = useLocation();

  return (
    <div
      className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
      onClick={onClose}
    >
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={onClose}
          className={`mobile-menu__link ${location.pathname === link.path ? 'mobile-menu__link--active' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default HamburgerMenu;
