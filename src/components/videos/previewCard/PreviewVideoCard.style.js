import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    previewCardContainer: {
        height: '300px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewCardPicture: {
        height: '240px',
        width: '240px',
        marginBottom: theme.spacing(1)
    },
    videoDateText: {
        fontSize: '12px',
        color: 'white'
    }
}))

export default style;
