import { render, type RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import type { ReactElement } from 'react';
import testI18n from './i18n';

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <I18nextProvider i18n={testI18n}>
      <MemoryRouter>{children}</MemoryRouter>
    </I18nextProvider>
  </HelmetProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
