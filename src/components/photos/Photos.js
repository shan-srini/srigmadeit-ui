import React, { useEffect } from 'react'
import style from './Photos.style'
import srigmadeitAPI, { mediaMetaToURL } from '../../services/srigmadeitAPI.service'
import PhotosGrid from './grid/PhotosGrid'

const Photos = ({ categoryId }) => {
    const classes = style();
    const [photos, setPhotos] = React.useState([]); // array of URLs srcs
    const [page, setPage] = React.useState(0); // current page
    const size = 15; // 3 images per row, 5 rows per page
    let totalPages;
    useEffect(() => {
        srigmadeitAPI.getMedia(categoryId, page, size)
            .then((res) => {
                let ids = res.media_ids;
                setPhotos(ids.map((media_meta) => mediaMetaToURL(media_meta)));
                totalPages = Math.ceil(res.count / size);
            })
    }, [page]);

    return (
        <div className={classes.photosContainer}>
            <PhotosGrid photos={photos} />
        </div>
    )
}

export default Photos;