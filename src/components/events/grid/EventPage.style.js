const { makeStyles } = require("@material-ui/core");

const style = makeStyles((theme) => ({
    eventPageContainer: {
        height: 'fit-content',
        backgroundColor: 'white',
        borderRadius: '15px',
        paddingTop: theme.spacing(3),
    },
    eventCardGridContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default style;