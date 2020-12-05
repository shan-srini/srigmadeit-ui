const { makeStyles } = require("@material-ui/core");

const style = makeStyles((theme) => ({
    manageContentContainer: {
        backgroundColor: 'lightslategray',
        minHeight: '90vh',
        minWidth: '100vw',
        paddingTop: theme.spacing(10)
    },
    navPopoverButton: {
        position: 'fixed',
        right: theme.spacing(2),
        bottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        borderRadius: '75px',
        backgroundColor: 'blue',
        cursor: 'pointer'
    }
}));

export default style;