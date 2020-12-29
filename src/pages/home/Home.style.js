import { makeStyles } from "@material-ui/core";


const style = makeStyles((theme) => ({
    homeContainer: {
        height: 'fit-content',
        marginTop: theme.spacing(8)
    },
    homeBackground: {
        position: 'absolute',
        top: '0',
        width: '100%'
    },
    recentEventsContainer: {
        paddingBottom: theme.spacing(5),
        position: 'absolute',
        top: '85vh',
        height: 'fit-content'
    },
    scrollUpDownArrow: {
    }
}));

export default style;