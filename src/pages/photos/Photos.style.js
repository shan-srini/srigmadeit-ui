const { makeStyles } = require("@material-ui/core");

const photoTopMargin = 3;

const style = makeStyles((theme) => ({
    photosPageContainer: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            paddingTop: '10vh',
            marginBottom: theme.spacing(5)
        }
    },
    photosPageTitle: {
        position: 'absolute',
        top: '65px',
        fontWeight: '800',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 'fit-content',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            top: theme.spacing(8)
        }
    },
    // Skinny left and right columns
    photosPageSkinnyColumn: {
        // backgroundColor: 'green',
        width: "25vw",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            minWidth: '100%',
        }
    },
    photosPageSkinnyColumnTopImage: {
        height: '55vh',
        width: '90%',
        marginTop: theme.spacing(photoTopMargin),
        borderRadius: '25px'
    },
    photosPageSkinnyColumnBottomImage: {
        height: '27vh',
        width: '90%',
        marginTop: theme.spacing(photoTopMargin),
        borderRadius: '25px'
    },
    // Wide middle column
    photosPageWideColumn: {
        // backgroundColor: 'blue',
        width: "50vw",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
            minWidth: '100%',
            flexDirection: 'column'
        }
    },
    photosPageWideColumnImage: {
        height: '90%',
        width: '45%',
        marginTop: theme.spacing(photoTopMargin),
        borderRadius: '25px',
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
            width: '100%',
        }
    },
    // All images common styling
    photosPageImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
        borderRadius: 'inherit'
    },
}))

export default style;