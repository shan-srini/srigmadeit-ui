import React from 'react'
import background from '../../assets/homeBackgroundAnimation.mp4'
import homeBackProfilePic from '../../assets/homeBackProfilePic.png'

const container = {
    height: '80vh',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
}

const backgroundAnimation = {
    position: 'absolute',
    height: '100%',
    minWidth: '100%',
    zIndex: -1,
    objectFit: 'cover'
}

const profilePicStyle = {
    height: '90%',
}

const Bg = () => {
    return (
        <div style={container}>
            <video title="background animation video" autoPlay loop muted playsInline style={backgroundAnimation} height="auto" width="100%">
                <source src={background} />
            </video>
            <img alt="srigmadeit profile picture" src={homeBackProfilePic} style={profilePicStyle} height="auto" width="auto" />
        </div>
    )
}

export default Bg;