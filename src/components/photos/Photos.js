import React, { useEffect, useState } from 'react'
import style from './Photos.style'
import srigmadeitAPI, { mediaMetaToURL } from '../../services/srigmadeitAPI.service'
import PhotosGrid from './grid/PhotosGrid'
import { CircularProgress } from '@material-ui/core'

const Photos = ({ categoryId }) => {
    const classes = style();
    const [photos, setPhotos] = useState([]); // array of URLs srcs
    const [page, setPage] = useState(0); // current page
    const [totalPages, setTotalPages] = useState();
    const [loadingMore, setLoadingMore] = useState(true);
    const size = 15; // how many pics to retrieve at once (3 images per row, 5 rows per page)
    useEffect(() => {
        setLoadingMore(true);
        srigmadeitAPI.getMedia(categoryId, page, size)
            .then((res) => {
                let new_photos = res.media_ids.map((media_meta) => mediaMetaToURL(media_meta));
                setPhotos(photos => photos.concat(new_photos));
                setTotalPages(Math.ceil(res.count / size));
                setLoadingMore(false);
            })
    }, [page]);

    const handleScroll = () => {
        if ((page < totalPages - 1) && window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 50)
            setPage(page => page + 1)
    }

    useEffect(() => {
        if (loadingMore) return;
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // this might be pretty inefficient...
    }, [totalPages, page, loadingMore]);

    return (
        <div className={classes.photosContainer}>
            <PhotosGrid photos={photos} />
            {loadingMore && <div className={classes.loadingIcon}> <CircularProgress color="secondary" /> </div>}
        </div>
    )
}

export default Photos;