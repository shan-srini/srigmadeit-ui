import React from 'react'
import { Container, Paper, Typography } from '@material-ui/core'
import style from './Photos.style.js'
import { mediaMetaToURL } from '../../services/srigmadeitAPI.service.js'

const Photos = (props) => {
    const classes = style();
    return (
        <Container className={classes.photosPageContainer}>
            <Typography variant="h6" className={classes.photosPageTitle}> gallery of my current favorites </Typography>
            <div className={classes.photosPageSkinnyColumn}>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnTopImage}>
                    <img className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'photosPageStaticImage0' })} />
                </Paper>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnBottomImage}>
                    <img className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'photosPageStaticImage1' })} />
                </Paper>
            </div>

            <div className={classes.photosPageWideColumn}>
                <Paper elevation={20} className={classes.photosPageWideColumnImage}>
                    <img className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'photosPageStaticImage2' })} />
                </Paper>
                <Paper elevation={20} className={classes.photosPageWideColumnImage}>
                    <img className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'photosPageStaticImage3' })} />
                </Paper>
            </div>

            <div className={classes.photosPageSkinnyColumn}>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnTopImage}>
                    <img className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'photosPageStaticImage4' })} />
                </Paper>
                <Paper elevation={20} className={classes.photosPageSkinnyColumnBottomImage}>
                    <img className={classes.photosPageImage} src={mediaMetaToURL({ '_id': 'photosPageStaticImage5' })} />
                </Paper>
            </div>
        </Container>
    )
}

export default Photos;