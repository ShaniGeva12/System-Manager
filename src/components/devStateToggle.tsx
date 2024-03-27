import LanguageIcon from '@mui/icons-material/Language';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

function DevStateToggle() {
    return (
        <>
            <LanguageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <BrightnessMediumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        </>
    )
}
export default DevStateToggle;