import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Theme } from '../types/theme-types';
import { customerStyles } from '../assets/customer-styles';

export interface ThemeContextData {
  theme?: Theme;
}

export const ThemeContext = createContext({} as ThemeContextData);

interface ProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<Theme>();
  const [isLoading, setIsLoading] = useState(false);

  const loadTheme = useCallback(async () => {
    setTheme(customerStyles[0]);
  }, []);

  useEffect(() => {
    try {
      loadTheme();
    } finally {
      setIsLoading(false);
    }
  }, [loadTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {!isLoading ? (
        <>{children}</>
      ) : (
        <div>Estamos preparando tudo. Aguarde...</div>
      )}
    </ThemeContext.Provider>
  );
}
