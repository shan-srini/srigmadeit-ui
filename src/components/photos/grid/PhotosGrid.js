import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import style from './PhotosGrid.style';
import PhotoCard from '../card/PhotoCard';

const PhotosGrid = ({ photos }) => {
    const classes = style();
    const [openedIndex, setOpenedIndex] = useState();

    const handlePhotoCardSetOpen = (index, setOpen) => {
        if (setOpen) {
            setOpenedIndex(index);
        } else {
            setOpenedIndex(false);
        }
    }

    return (
        <Grid container spacing={2} className={classes.photosGridContainer}>
            {photos.map((src, index) =>
                <Grid item xs={6} md={4} lg={3} key={`photo-${index}`}>
                    <PhotoCard
                        src={src}
                        open={openedIndex === index}
                        setOpen={(isOpen) => handlePhotoCardSetOpen(index, isOpen)}
                        openPrevPic={() => setOpenedIndex((cur) => cur - 1)}
                        openNextPic={() => setOpenedIndex((cur) => cur + 1)}
                        displayPrevArrow={index > 0}
                        displayNextArrow={index + 1 < photos.length}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default PhotosGrid;