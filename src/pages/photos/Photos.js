import React from 'react'
import { Container, Paper, Typography } from '@material-ui/core'
import style from './Photos.style.js'
import { mediaMetaToURL } from '../../services/srigmadeitAPI.service.js'
import LazyImage from '../../components/ux/lazyImage/LazyImage.js'

const Photos = (props) => {
    const classes = style();
    return (
        <Container className={classes.photosPageContainer}>
            <Typography variant="h6" className={classes.photosPageTitle}> GALLERY OF MY CURRENT FAVORITES </Typography>
            <div className={classes.photosPageSkinnyColumn}>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnTopImage}>
                    <LazyImage className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'staticPhotosPageImage0' })} />
                </Paper>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnBottomImage}>
                    <LazyImage className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'staticPhotosPageImage1' })} />
                </Paper>
            </div>

            <div className={classes.photosPageWideColumn}>
                <Paper elevation={20} className={classes.photosPageWideColumnImage}>
                    <LazyImage className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'staticPhotosPageImage2' })} />
                </Paper>
                <Paper elevation={20} className={classes.photosPageWideColumnImage}>
                    <LazyImage className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'staticPhotosPageImage3' })} />
                </Paper>
            </div>

            <div className={classes.photosPageSkinnyColumn}>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnTopImage}>
                    <LazyImage className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'staticPhotosPageImage4' })} />
                </Paper>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnBottomImage}>
                    <LazyImage className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'staticPhotosPageImage5' })} />
                </Paper>
            </div>
        </Container>
    )
}

export default Photos;