import React from 'react'
import { Grid } from '@material-ui/core';
import style from './PhotosGrid.style'
import PhotoCard from '../card/PhotoCard';

const PhotosGrid = ({ photos }) => {
    const classes = style();
    return (
        <Grid container spacing={2} className={classes.photosGridContainer}>
            {photos.map((src, index) =>
                <Grid item xs={6} md={4} key={`photo-${index}`}>
                    <PhotoCard style={{ maxWidth: '100%' }} src={src} />
                </Grid>
            )}
        </Grid>
    )
}

export default PhotosGrid;