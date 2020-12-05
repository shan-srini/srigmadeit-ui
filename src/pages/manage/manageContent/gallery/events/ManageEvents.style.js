const { makeStyles } = require("@material-ui/core");

const style = makeStyles((theme) => ({
    manageEventsContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    createEventContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '25vw',
        minHeight: 'fit-content',
        height: '500px',
        justifyContent: 'space-between',
        padding: '15px',
        backgroundColor: 'forestgreen',
        borderRadius: '15px',
        marginTop: theme.spacing(2)
    },
    editEventContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30vw',
        height: '500px',
        justifyContent: 'space-between',
        padding: '15px',
        backgroundColor: 'firebrick',
        borderRadius: '15px',
        marginTop: theme.spacing(2)
    }
}));

export default style;