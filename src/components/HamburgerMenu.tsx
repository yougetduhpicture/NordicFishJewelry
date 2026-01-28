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
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-navy/95 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Content */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 z-40 bg-navy flex flex-col items-center justify-center gap-8 md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`text-gold hover:text-white text-2xl tracking-[0.2em] font-medium transition-colors ${
              location.pathname === link.path ? 'text-white' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default HamburgerMenu;
