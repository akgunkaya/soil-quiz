import { createTheme } from '@mui/material/styles';


let theme = createTheme({
    palette: {
        primary: {
            main: '#72b73b',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

export default theme;