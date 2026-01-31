import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'fi' ? 'en' : 'fi';
    i18n.changeLanguage(newLang);

    // Update URL to reflect new language
    let newPath = location.pathname;

    if (currentLang === 'fi') {
      // Switching from Finnish to English - remove /fi prefix
      newPath = newPath.replace(/^\/fi/, '') || '/';
    } else {
      // Switching from English to Finnish - add /fi prefix
      newPath = `/fi${newPath === '/' ? '' : newPath}`;
    }

    navigate(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label={`Switch to ${currentLang === 'fi' ? 'English' : 'Finnish'}`}
    >
      <img
        src={currentLang === 'fi' ? '/images/flags/en.png' : '/images/flags/fi.png'}
        alt={currentLang === 'fi' ? 'Switch to English' : 'Vaihda suomeksi'}
        className="language-toggle__flag"
      />
      <span className="language-toggle__btn">{currentLang === 'fi' ? 'EN' : 'FI'}</span>
    </button>
  );
};

export default LanguageToggle;
