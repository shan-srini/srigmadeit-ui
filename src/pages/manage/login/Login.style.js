import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        top: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'fit-content',
        padding: '25px',
        backgroundColor: '#BFDFFF',
        borderRadius: '25px'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    errorToast: {
        top: '10vh',
        width: '100%',
        backgroundColor: '#cc0000',
        padding: '15px'
    }
}));

export default style;