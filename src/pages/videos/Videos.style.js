import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    videoPageContainer: {
        marginTop: theme.spacing(16),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(4)
        }
    }
}))

export default style;
