/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import { IconButton } from '@mui/material';
import useMuiTheme from '../contexts/theme';
import { lightTheme, darkTheme } from '../styles/material/theme';
import useLanguageContext, { LanguageOptions, ltrDir, rtlDir } from '../contexts/language';

function DevStateToggle() {

    const {themeMode, toggleTheme} = useMuiTheme();
    const {language, changeLanguage, changeDirection} = useLanguageContext();

    const handleThemeChange = (_event: React.MouseEvent<HTMLElement>) => {
        const isLight = themeMode === lightTheme;
        toggleTheme(isLight? darkTheme : lightTheme);
    };

    const handleLanguageChange = (_event: React.MouseEvent<HTMLElement>) => {
        const isHebrew = language === LanguageOptions.Hebrew;
        const newLanguage = isHebrew ? LanguageOptions.English : LanguageOptions.Hebrew;
        const newDir = newLanguage === LanguageOptions.Hebrew ? rtlDir : ltrDir;
        changeLanguage(newLanguage);
        changeDirection(newDir);
    };


    return (
        <>
            <IconButton onClick={handleLanguageChange} color="inherit">
                <LanguageIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
            </IconButton>
            <IconButton onClick={handleThemeChange} color="inherit">
                <BrightnessMediumIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
            </IconButton>
        </>
    )
}
export default DevStateToggle;