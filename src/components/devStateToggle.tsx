/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import { IconButton } from '@mui/material';

function DevStateToggle() {

    const handleThemeChange = (_event: React.MouseEvent<HTMLElement>) => {
        console.log('change theme');
    };

    const handleLanguageChange = (_event: React.MouseEvent<HTMLElement>) => {
        console.log('change language');
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