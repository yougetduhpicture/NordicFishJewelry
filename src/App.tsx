import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from './components';
import { Home, Gallery, About, Contact } from './pages';
import './i18n';

// Language wrapper component to set language based on URL
const LanguageWrapper = ({ lang, children }: { lang: string; children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <>{children}</>;
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* English Routes */}
          <Route
            element={
              <LanguageWrapper lang="en">
                <Layout />
              </LanguageWrapper>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Finnish Routes */}
          <Route
            element={
              <LanguageWrapper lang="fi">
                <Layout />
              </LanguageWrapper>
            }
          >
            <Route path="/fi" element={<Home />} />
            <Route path="/fi/" element={<Home />} />
            <Route path="/fi/gallery" element={<Gallery />} />
            <Route path="/fi/about" element={<About />} />
            <Route path="/fi/contact" element={<Contact />} />
          </Route>

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
