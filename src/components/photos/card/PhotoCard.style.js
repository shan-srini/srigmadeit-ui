import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
    photoCardContainer: {
        width: '100%',
        height: '100%',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    photoCardPictureContainer: {
        display: "block",
        borderRadius: '15px',
        maxHeight: '200px',
        maxWidth: '100%',
        height: 'auto',
        width: 'auto',
        boxShadow: `0px 0px 4px #000`,
        objectFit: "cover",
        objectPosition: "center",
        cursor: 'pointer',
        transition: '.5s'
    },
    photoCardOpenContainer: {
        position: "fixed",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(0, 0, 0, 0.5)',
    },
    photoCardPictureOpenContainer: {
        transition: '.5s',
        marginTop: theme.spacing(8),
        maxHeight: '90vh',
        maxWidth: '90vw',
        height: 'auto',
        width: 'auto',
    },
    closeButton: {
        position: 'fixed',
        top: theme.spacing(10),
        right: theme.spacing(4),
        fontWeight: 500,
        fontSize: 36,
        cursor: 'pointer'
    }
}))

export default style;