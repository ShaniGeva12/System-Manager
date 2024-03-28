import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import AppHeader from './components/header';
import { darkTheme, lightTheme } from './styles/material/theme';
import { MuiThemeProvider } from './contexts/theme';
import { useState } from 'react';

function App() {
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
