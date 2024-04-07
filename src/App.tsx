import { CssBaseline, Direction, ThemeProvider } from '@mui/material';
import './App.css'
import AppHeader from './components/header';
import { darkTheme, lightTheme } from './styles/material/theme';
import { MuiThemeProvider } from './contexts/theme';
import { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageOptions, LanguageProvider, rtlDir } from './contexts/language';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import BodyLayout from './components/body-layout';


function App() {
  const { i18n } = useTranslation();
  
  const [themeMode, setThemeMode] = useState(lightTheme);
  const [language, setLanguage] = useState(LanguageOptions.Hebrew);
  const [direction, setDirection] = useState(rtlDir);

  const toggleTheme = () => {
    const isLight = themeMode === lightTheme;
    setThemeMode(isLight? darkTheme : lightTheme);
  };

  const changeLanguage = (lan: LanguageOptions) => {
    setLanguage(lan);
    i18n.changeLanguage(lan);
  };

  const changeDirection = (dir: Direction) => {
    setDirection(dir);
  }

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const emptyCache = createCache({
    key: "meaningless-key",
  });

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  useEffect(() => {
    document.body.classList.remove(themeMode === darkTheme? 'lightTheme' : 'darkTheme');
    document.body.classList.add(themeMode === darkTheme? 'darkTheme' : 'lightTheme');
  }, [themeMode]);

  return (
    <>
      <Suspense fallback='Loading...'>
        <LanguageProvider value={{language, changeLanguage, direction, changeDirection}}>
          <CacheProvider value={direction === 'rtl'? cacheRtl : emptyCache}>
            <MuiThemeProvider value={{themeMode, toggleTheme}}>
              <ThemeProvider theme={themeMode}>
                <CssBaseline />

                <AppHeader/>
                <BodyLayout/>
                
              </ThemeProvider>
            </MuiThemeProvider>
          </CacheProvider>
        </LanguageProvider>
      </Suspense>
    </>
  )
}

export default App
