import React from 'react'
import LazyImage from '../../ux/lazyImage/LazyImage'
import style from './PhotoCard.style'
import CloseButton from '../../ux/closeButton/CloseButton'

const PhotoCard = ({ src }) => {
    const classes = style();
    const [open, setOpen] = React.useState(false);

    const handleOpenImage = () => {
        document.body.style.overflowY = 'hidden';
        setOpen(true);
    }

    const handleCloseImage = () => {
        document.body.style.overflowY = 'scroll';
        setOpen(false);
    }

    return (
        <div className={open ? classes.photoCardOpenContainer : classes.photoCardContainer}>
            <LazyImage onClick={handleOpenImage} src={src} className={open ? classes.photoCardPictureOpenContainer : classes.photoCardPictureContainer} />
            {open ?
                <div className={classes.closeButton}>
                    <CloseButton open={open} onClick={handleCloseImage} />
                </div>
                :
                null
            }
        </div>
    )
}

export default PhotoCard;