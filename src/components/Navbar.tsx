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
    { path: `${currentLang}/gallery`, label: t('nav.gallery') },
    { path: `${currentLang}/about`, label: t('nav.about') },
    { path: `${currentLang}/contact`, label: t('nav.contact') },
  ];

  return (
    <>
    <header>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to={`${currentLang}/`} className="navbar__logo">
            <div className="navbar__logo-icon">
              <img
                src="/images/logo/logo.png"
                alt="Nordic Fish Jewelry Logo"
                className="navbar__logo-image"
              />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__nordic-fish">NORDIC FISH</span>
              <span className="navbar__jewelry">JEWELRY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar__nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar__actions">
            <div className="navbar__mobile-toggle">
              <LanguageToggle />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}
              aria-label="Toggle menu"
            >
              <span className="hamburger__line" />
              <span className="hamburger__line" />
              <span className="hamburger__line" />
            </button>
          </div>
        </div>
      </nav>
    </header>

      {/* Mobile Menu */}
      <HamburgerMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />

      {/* Spacer for fixed navbar */}
      <div className="navbar-spacer" />
    </>
  );
};

export default Navbar;
