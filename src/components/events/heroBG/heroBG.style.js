import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
    heroImageContainer: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    heroImage: {
        paddingLeft: 0,
        paddingRight: 0,
        height: "60vh",
        width: '100vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center'
    },
    eventMetaBar: {
        backgroundColor: 'rgba(0, 0, 0, .50)',
        // backdropFilter: 'blur(5px)',
        padding: theme.spacing(1),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroText: {
        width: 'fit-content'
    }
}));

export default style;