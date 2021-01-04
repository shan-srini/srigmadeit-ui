import React from 'react'
import { dataSources, mediaMetaToURL } from '../../../services/srigmadeitAPI.service'
import LazyImage from '../../ux/lazyImage/LazyImage'
import style from './PreviewVideoCard.style'

const PreviewVideoCard = ({ videoMeta }) => {
    const classes = style();

    return (
        <div className={classes.previewCardContainer}>
            <LazyImage
                src={mediaMetaToURL({ '_id': videoMeta._id, 'source': dataSources.COS })}
                className={classes.previewCardPicture}
            />
            <span> {videoMeta.category} </span>
        </div>
    )
}

export default PreviewVideoCard;