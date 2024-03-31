import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import AppHeader from './components/header';
import { darkTheme, lightTheme } from './styles/material/theme';
import { MuiThemeProvider } from './contexts/theme';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {t} = useTranslation();
  
  const [themeMode, setThemeMode] = useState(lightTheme);

  const toggleTheme = () => {
    const isLight = themeMode === lightTheme;
    setThemeMode(isLight? darkTheme : lightTheme);
  };

  return (
    <>
    <MuiThemeProvider value={{themeMode, toggleTheme}}>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <AppHeader/>
      </ThemeProvider>
    </MuiThemeProvider>

    </>
  )
}

export default App
