import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    contactPageContainer: {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        padding: theme.spacing(3),
        marginBottom: theme.spacing(5),
        height: '80vh',
        borderRadius: '15px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(5),
            height: 'auto'
        }
    },
    infoContainer: {
        textAlign: 'center',
        width: 'fit-content',
        padding: theme.spacing(0, 5, 0, 0),
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            width: '90vw'
        }
    },
    profilePicContainer: {
        display: "block",
        maxHeight: '80%',
        maxWidth: '500px',
        height: 'auto',
        width: 'auto',
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: '15px',
        [theme.breakpoints.down('sm')]: {
            height: '75%',
            width: '75%',
        },
        [theme.breakpoints.up('lg')]: {
            height: '75%'
        }
    }
}))

export default style;