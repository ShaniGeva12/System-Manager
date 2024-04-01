import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import AppHeader from './components/header';
import { darkTheme, lightTheme } from './styles/material/theme';
import { MuiThemeProvider } from './contexts/theme';
import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageOptions, LanguageProvider } from './contexts/language';

function App() {
  const { i18n } = useTranslation();
  
  const [themeMode, setThemeMode] = useState(lightTheme);
  const [language, setLanguage] = useState(LanguageOptions.Hebrew);
  // const [dir, setDir] = useState();

  const toggleTheme = () => {
    const isLight = themeMode === lightTheme;
    setThemeMode(isLight? darkTheme : lightTheme);
  };

  const changeLanguage = (lan: LanguageOptions) => {
    setLanguage(lan);
    i18n.changeLanguage(lan);
  };

  return (
    <>
      <Suspense fallback='Loading...'>
        <LanguageProvider value={{language, changeLanguage}}>
          <MuiThemeProvider value={{themeMode, toggleTheme}}>
            <ThemeProvider theme={themeMode}>
              <CssBaseline />
              <AppHeader/>
            </ThemeProvider>
          </MuiThemeProvider>
        </LanguageProvider>
      </Suspense>
    </>
  )
}

export default App
