import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles((theme) => ({
    loadingLogoContainer: {
        display: 'flex',
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'black',
        animationName: '$disappearLogoContainer',
        animationDuration: '2s',
        visibility: 'visible',
        animationFillMode: 'forwards',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '85vh'
        },
        zIndex: '1000'
    },
    "@keyframes disappearLogoContainer": {
        "0%": { opacity: "100%" },
        "70%": { opacity: "100%" },
        "100%": { opacity: "0" }
    },
    loadingLogo: {
        display: 'block',
        margin: 'auto',
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '75%'
        }
    }
}));

export default style;