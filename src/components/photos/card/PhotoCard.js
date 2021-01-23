import React from 'react'
import LazyImage from '../../ux/lazyImage/LazyImage'
import style from './PhotoCard.style'
import CloseButton from '../../ux/closeButton/CloseButton'
import SimpleArrow from '../../ux/simpleArrow/SimpleArrow'

const PhotoCard = ({ src, open, setOpen, displayPrevArrow, displayNextArrow, openPrevPic, openNextPic }) => {
    const classes = style();
    const handleOpenImage = (e) => {
        if (open) {
            e.stopPropagation(); // so that parent onClick to close the open picture doesn't catch on the image
            return;
        }
        document.body.style.overflowY = 'hidden';
        setOpen(true);
    }

    const handleCloseImage = () => {
        document.body.style.overflowY = 'scroll';
        setOpen(false);
    }

    const handleLeftArrowClick = (e) => {
        e.stopPropagation();
        openPrevPic();
    }
    const handleRightArrowClick = (e) => {
        e.stopPropagation();
        openNextPic();
    }

    return (
        <React.Fragment>
            {
                open &&
                <div style={{ height: '100vh', width: '100vh' }}></div> // forces header and footer to stay out
            }
            <div className={open ? classes.photoCardOpenContainer : classes.photoCardContainer} onClick={() => { open && handleCloseImage() }}>
                <LazyImage onClick={handleOpenImage} src={src} className={open ? classes.photoCardPictureOpenContainer : classes.photoCardPictureContainer} />
                {open ?
                    <div className={classes.closeButton}>
                        <CloseButton open={open} onClick={handleCloseImage} />
                    </div>
                    :
                    null
                }
                {
                    open && displayPrevArrow ?
                        <SimpleArrow left={true} onClick={handleLeftArrowClick} style={{ position: 'absolute', top: '45%', left: '16px', order: '0' }} />
                        :
                        null
                }
                {
                    open && displayNextArrow ?
                        <SimpleArrow right={true} onClick={handleRightArrowClick} style={{ position: 'absolute', top: '45%', right: '16px', order: '1' }} />
                        :
                        null
                }
            </div>
        </React.Fragment>
    )
}

export default PhotoCard;