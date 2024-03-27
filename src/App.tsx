import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import AppHeader from './components/header';
import { darkTheme } from './styles/material/theme';

function App() {

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppHeader/>
    </ThemeProvider>
    </>
  )
}

export default App
