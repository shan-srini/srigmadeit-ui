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
    let thumbnailRef = useRef(null);
    let videoRef = useRef(null);

    return (
        <div>
            Manage Videos
            <br />
            <form onSubmit={(e) => { uploadVideo(e, videoName, thumbnailRef, videoRef, cosConfig) }}>
                <label>Video name:</label>
                <input type="text" title="video name" required value={videoName} onChange={(e) => setVideoName(e.target.value)} />
                <br />
                <label>Video thumbnail:</label>
                <input type="file" accept="image/*" required ref={thumbnailRef} />
                <label>Video mp4 file:</label>
                <input type="file" accept="video/mp4" required ref={videoRef} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

async function uploadVideo(e, videoName, videoThumbnailRef, videoFileRef, cosConfig) {
    e.preventDefault()
    let videoThumbnail = videoThumbnailRef.current.files[0];
    let videoFile = videoFileRef.current.files[0];

    let res = await srigmadeitAPI.createMedia('SRIGMADEIT_VIDEOS', videoName, dataSources.ORACLE, 1);
    if (res.length > 0) {
        const videoId = res[0];
        try {
            // upload thumbnail photo to B2
            await objectStorageService.uploadCOS(cosConfig.photos, [videoId], [videoThumbnail]).then(() => window.alert('success thumbnail upload'));
            // upload video mp4 file to Oracle Cloud
            await objectStorageService.uploadCOS(cosConfig.videos, [videoId], [videoFile], console.log, false).then(() => window.alert('success video upload'))
        }
        catch (error) {
            console.error(error);
            window.alert('failed cos upload stage, video was not uploaded. Contact Shan!');
        }
    } else {
        window.alert('failed srig api upload');
    }
}

export default ManageVideos;