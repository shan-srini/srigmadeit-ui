const { makeStyles } = require("@material-ui/core");

const style = makeStyles((theme) => ({
    eventCardsGridContainer: {
        paddingTop: theme.spacing(1),
        backgroundColor: 'white',
        borderRadius: '15px',
    },
    pageHeadingText: {
        color: 'black',
        fontWeight: 500,
    },
    pageSelectorDivider: {
        width: '100%',
        height: '20px',
        borderRadius: '15px',
        backgroundColor: 'gray',
        marginBottom: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: theme.spacing(1),
        alignItems: 'center'
    },
    eventCardGridContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingAndSearchContainer: {
        padding: theme.spacing(0, 0, 1, 0),
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        color: 'black'
    }
}));

export default style;