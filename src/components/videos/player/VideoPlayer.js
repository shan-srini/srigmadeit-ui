import React, { useState, useEffect } from 'react'
import { CircularProgress, Typography } from '@material-ui/core'

const videoPlayerContainer = {
    height: '40vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
}

const circularProgressStyle = {
    margin: 'auto'
}

const titleText = {
    fontSize: '34px',
    lineHeight: 1.25,
    textAlign: 'center'
}

const VideoPlayer = ({ src, videoName }) => {
    const [loading, setLoading] = useState(true);
    const [errorExists, setErrorExists] = useState(false);
    useEffect(() => {
        setLoading(true);
        setErrorExists(false);
    }, [src]);

    return (
        <div style={videoPlayerContainer}>
            {loading ?
                <CircularProgress color="secondary" style={circularProgressStyle} />
                :
                null
            }
            {
                errorExists ?
                    <span style={circularProgressStyle}> There was an error loading this video. </span>
                    :
                    null
            }
            <video
                title="Srigmade it video player"
                style={{ display: loading ? 'none' : 'block', minHeight: '90%', maxHeight: '100%' }}
                key={src}
                height="90%"
                controls playsInline autoPlay muted loop
                onLoadedData={() => setLoading(false)}
                onError={() => setErrorExists(true)}
            >
                <source src={src} type='video/mp4' />
                HTML5 video is not supported on your browser.
            </video>
            <Typography variant="overline" style={titleText}>
                {videoName}
            </Typography>
        </div >

        // <iframe
        //     {...props}
        //     frameBorder="0"
        //     // onLoad={()=>setLoading(false)}
        //     allowFullScreen={true}>
        // </iframe>
    )
}

export default VideoPlayer;