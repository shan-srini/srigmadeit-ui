import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#3A3A38',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: theme.spacing(1, 2, 3, 2),
        }
    },
    siteNameContainer: {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
        }
    },
    peopleInfoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        paddingRight: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: 0,
        }
    },
    peopleInfo: {
        cursor: 'default'
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'underline',
        color: 'white'
    },
    email: {
        color: 'white'
    },
    instagramIcon: {
        paddingRight: theme.spacing(.5)
    }
}));

export default style;