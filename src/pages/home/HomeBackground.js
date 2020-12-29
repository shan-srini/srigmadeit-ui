import React from 'react'
import background from '../../assets/homeBackAnimation.gif'
import homeBackProfilePic from '../../assets/homeBackProfilePic.png'

const animationStyle = {
    backgroundColor: 'blue',
    height: '80vh',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const profilePicStyle = {
    height: '75%',
}

const Bg = () => {
    return (
        <div style={animationStyle}>
            <img src={homeBackProfilePic} style={profilePicStyle} />
        </div>
    )
}

export default Bg;