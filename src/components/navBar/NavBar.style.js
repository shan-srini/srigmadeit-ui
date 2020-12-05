const { makeStyles } = require("@material-ui/core");

const transformBreakpoint = "xs";

const style = makeStyles((theme) => ({
    navBar: {
        backgroundColor: theme.palette.background.default,
        height: theme.spacing(8),
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 10),
        alignItems: 'center',
        [theme.breakpoints.down(transformBreakpoint)]: {
            padding: theme.spacing(0, 4)
        }
    },
    navBarItem: {
        cursor: 'pointer',
    },
    events: {
        order: 1,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    photos: {
        order: 2,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    smiLogo: {
        order: 3,
        height: '100%',
        [theme.breakpoints.down(transformBreakpoint)]: {

        }
    },
    videos: {
        order: 4,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    contact: {
        order: 5,
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'none'
        }
    },
    menuButton: {
        order: 10,
        display: 'none',
        [theme.breakpoints.down(transformBreakpoint)]: {
            display: 'block',
        }
    },
    hamburgerBar: {
        width: '40px',
        height: '5px',
        backgroundColor: '#FFFFFF',
        margin: '6px 0',
        transition: '0.4s',
    },
    bar1Transition: {
        transform: 'rotate(-45deg) translateY(15px)'
    },
    bar2Transition: {
        opacity: 0
    },
    bar3Transition: {
        transform: 'rotate(-135deg) translateY(15px)'
    },
    collapsedPageNavBarOptions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}));

export default style;