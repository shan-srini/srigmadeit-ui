import React from 'react'
import { Container, Paper, Typography } from '@material-ui/core'
import style from './Photos.style.js'
import srigmadeitAPI from '../../services/srigmadeitAPI.service.js'

const Photos = (props) => {
    const classes = style();
    return (
        <Container className={classes.photosPageContainer}>
            <Typography variant="h6" className={classes.photosPageTitle}> gallery of my current favorites </Typography>
            <div className={classes.photosPageSkinnyColumn}>
                <Paper elevation="20" className={classes.photosPageSkinnyColumnTopImage}>
                    <img className={classes.photosPageImage} src="http://images.pixieset.com/40668403/77c68d69bc08f15b6e9d86d0b67764db-small.JPG" /* src={srigmadeitAPI.mediaMetaToURL({'_id': 'photosPageStaticImage1'})} */ />
                </Paper>
                <Paper elevation="20" className={classes.photosPageSkinnyColumnBottomImage}>
                    <img className={classes.photosPageImage} src="https://www.universetoday.com/wp-content/uploads/2009/12/helixnebula-1280x720.jpg" /* src={srigmadeitAPI.mediaMetaToURL({'_id': 'photosPageStaticImage2'})} */ />
                </Paper>
            </div>

            <div className={classes.photosPageWideColumn}>
                <Paper elevation="20" className={classes.photosPageWideColumnImage}>
                    <img className={classes.photosPageImage} src="http://images.pixieset.com/40668403/77c68d69bc08f15b6e9d86d0b67764db-small.JPG" /* src={srigmadeitAPI.mediaMetaToURL({'_id': 'photosPageStaticImage3'})} */ />
                </Paper>
                <Paper elevation="20" className={classes.photosPageWideColumnImage}>
                    <img className={classes.photosPageImage} src="http://images.pixieset.com/40668403/3e0be32789b23ef09aee4c80c2803bc4-medium.JPG" /* src={srigmadeitAPI.mediaMetaToURL({'_id': 'photosPageStaticImage4'})} */ />
                </Paper>
            </div>

            <div className={classes.photosPageSkinnyColumn}>
                <Paper elevation="20" className={classes.photosPageSkinnyColumnTopImage}>
                    <img className={classes.photosPageImage} src="https://www.universetoday.com/wp-content/uploads/2009/12/helixnebula-1280x720.jpg" /* src={srigmadeitAPI.mediaMetaToURL({'_id': 'photosPageStaticImage5'})} */ />
                </Paper>
                <Paper elevation="20" className={classes.photosPageSkinnyColumnBottomImage}>
                    <img className={classes.photosPageImage} src="https://www.universetoday.com/wp-content/uploads/2009/12/helixnebula-1280x720.jpg" /* src={srigmadeitAPI.mediaMetaToURL({'_id': 'photosPageStaticImage6'})} */ />
                </Paper>
            </div>
        </Container>
    )
}

export default Photos;