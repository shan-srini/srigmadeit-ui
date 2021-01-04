import React, { useRef, useState } from 'react'
import srigmadeitAPI, { dataSources } from '../../../../services/srigmadeitAPI.service'
import objectStorageService from '../../../../services/objectStorage.service'

/**
 * From a DB point of view, each video gets a document only in the Media table.
 * event_id will always be SRIGMADEIT_VIDEOS
 * category_id will actually be the name of the video
 * source will be dm (for dailymotion videos)
 * request_id will be whatever Srig is putting in as the video url
 */
const ManageVideos = ({ cosConfig }) => {
    const [videoName, setVideoName] = useState('');
    const [videoId, setVideoId] = useState('');
    let thumbnailRef = useRef(null);

    return (
        <div>
            Manage Videos
            <br />
            <form onSubmit={(e) => { uploadVideo(e, videoName, videoId, thumbnailRef, cosConfig) }}>
                <label>Video name:</label>
                <input type="text" title="video name" required value={videoName} onChange={(e) => setVideoName(e.target.value)} />
                <br />
                <label>Video id:</label>
                <input type="text" required value={videoId} onChange={(e) => setVideoId(e.target.value)} />
                <br />
                <label>Video thumbnail:</label>
                <input type="file" required ref={thumbnailRef} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

async function uploadVideo(e, videoName, videoId, videoThumbnailRef, cosConfig) {
    e.preventDefault()
    let videoThumbnail = videoThumbnailRef.current.files[0];

    let res = await srigmadeitAPI.createMedia('SRIGMADEIT_VIDEOS', videoName, dataSources.GD, 1, videoId);
    if (res) {
        try {
            await objectStorageService.uploadCOS(cosConfig, [videoId], [videoThumbnail]).then(() => window.alert('success'));
        }
        catch (error) {
            console.error(error);
            window.alert('failed cos upload');
        }
    } else {
        window.alert('failed srig api upload');
    }
}

export default ManageVideos;