import { screen, fireEvent } from '@testing-library/react';
import { render } from '../test/utils';
import testI18n from '../test/i18n';
import LanguageToggle from './LanguageToggle';

let mockPathname = '/products';
const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: mockPathname }),
  };
});

describe('LanguageToggle', () => {
  beforeEach(() => {
    testI18n.changeLanguage('en');
    mockPathname = '/products';
    mockNavigate.mockClear();
  });

  it('shows FI label when language is English', () => {
    render(<LanguageToggle />);
    expect(screen.getByText('FI')).toBeInTheDocument();
  });

  it('shows EN label when language is Finnish', () => {
    testI18n.changeLanguage('fi');
    render(<LanguageToggle />);
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('navigates to /fi-prefixed path when switching EN → FI', () => {
    render(<LanguageToggle />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalledWith('/fi/products');
  });

  it('removes /fi prefix when switching FI → EN', () => {
    mockPathname = '/fi/products';
    testI18n.changeLanguage('fi');
    render(<LanguageToggle />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalledWith('/products');
  });

  it('navigates to /fi when switching EN → FI at root', () => {
    mockPathname = '/';
    render(<LanguageToggle />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalledWith('/fi');
  });

  it('navigates to / when switching FI → EN at root', () => {
    mockPathname = '/fi';
    testI18n.changeLanguage('fi');
    render(<LanguageToggle />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
