import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLang = i18n.language === 'fi' ? '/fi' : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: `${currentLang}/`, label: t('nav.home') },
    { path: `${currentLang}/products`, label: t('nav.products') },
    { path: `${currentLang}/about`, label: t('nav.about') },
    { path: `${currentLang}/contact`, label: t('nav.contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-navy transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={`${currentLang}/`} className="flex items-center gap-3">
              <img
                src="/images/logo/logo.png"
                alt="Nordic Fish Jewelry Logo"
                className="h-10 md:h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-gold font-bold text-lg tracking-wider">
                  NORDIC FISH
                </span>
                <span className="block text-gold text-xs tracking-[0.2em]">
                  JEWELRY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-gold hover:text-white tracking-wider text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-white' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <LanguageToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gold p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`h-0.5 bg-gold transition-transform origin-left ${
                      isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-gold transition-opacity ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-gold transition-transform origin-left ${
                      isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <HamburgerMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
