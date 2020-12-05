const { makeStyles } = require("@material-ui/core");

const style = makeStyles((theme) => ({
    galleryCurrentOptionsHeader: {
        textAlign: 'center',
        color: 'black',
    },
    galleryTypeTab: {
        position: 'fixed',
        bottom: '16px'
    }
}));

export default style;