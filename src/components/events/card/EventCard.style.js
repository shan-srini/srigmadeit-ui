const { makeStyles } = require("@material-ui/core");

const style = makeStyles((theme) => ({
    eventCardContainer: {
        height: 'fit-content',
        width: '80%',
        borderRadius: '15px',
        marginBottom: theme.spacing(4),
    },
    eventCardPictureContainer: {
        marginBottom: '8px',
        height: '250px',
        borderRadius: '15px',
        width: 'auto',
    },
    eventCardPicture: {
        borderRadius: '15px',
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block"
    }
}));

export default style;