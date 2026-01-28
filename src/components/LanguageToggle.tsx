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
      className="flex items-center gap-2 text-gold hover:text-white transition-colors"
      aria-label={`Switch to ${currentLang === 'fi' ? 'English' : 'Finnish'}`}
    >
      <img
        src={currentLang === 'fi' ? '/images/flags/en.png' : '/images/flags/fi.png'}
        alt={currentLang === 'fi' ? 'Switch to English' : 'Vaihda suomeksi'}
        className="w-6 h-4 object-cover rounded-sm"
      />
      <span className="text-sm font-medium tracking-wide">
        {currentLang === 'fi' ? 'EN' : 'FI'}
      </span>
    </button>
  );
};

export default LanguageToggle;
