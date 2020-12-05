import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#03a9f4',
        },
        background: {
            default: '#000000',
        },
        text: {
            primary: '#FFFFFF'
        }
    },
});

export default theme;