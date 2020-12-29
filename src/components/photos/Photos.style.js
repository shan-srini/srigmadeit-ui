import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
    photosContainer: {
        backgroundColor: 'white',
        paddding: theme.spacing(0, 1, 1, 0),
        margin: theme.spacing(2, 1, 3, 1),
        borderRadius: '15px'
    },
    loadingIcon: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}))

export default style;