import React, { useEffect, useState } from 'react'
import srigmadeitAPI, { mediaMetaToURL } from '../../services/srigmadeitAPI.service'
import VideoPlayer from '../../components/videos/player/VideoPlayer'
import PreviewVideosGrid from '../../components/videos/previewGrid/PreviewVideosGrid'
import style from './Videos.style'

const VideoPage = (props) => {
    const classes = style();
    const [videos, setVideos] = useState([]);
    const [selectedVideoMeta, setSelectedVideoMeta] = useState([]);
    useEffect(() => {
        srigmadeitAPI.getVideos().then((res) => {
            setVideos(res.media_ids);
        });
    }, []);

    return (
        <div className={classes.videoPageContainer}>
            <VideoPlayer
                src={mediaMetaToURL(selectedVideoMeta)}
                videoName={selectedVideoMeta.category}
            />
            <PreviewVideosGrid
                videos={videos}
                setSelectedVideoMeta={(selected) => setSelectedVideoMeta(selected)} />
        </div>
    )
}

export default VideoPage;