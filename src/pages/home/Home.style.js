import { makeStyles } from "@material-ui/core";
import background from '../../assets/homeBG.gif'

const style = makeStyles((theme) => ({
    homeContainer: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh',
        position: 'absolute'
    },
    recentEventsContainer: {
        paddingBottom: theme.spacing(5),
        position: 'relative',
        top: '80vh'
    },
    scrollUpDownArrow: {
    }
}));

export default style;