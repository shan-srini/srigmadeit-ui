import React from 'react'
import { Container, Typography } from '@material-ui/core'
import style from './Contact.style.js'
import profilePic from '../../assets/profilePic.jpeg'

const Contact = () => {
    const classes = style();

    return (
        <div className={classes.contactPageContainer}>
            <div className={classes.infoContainer}>
                <Typography variant="h2">
                    Contact me!
                </Typography>
                <br />
                <div>
                    <Typography variant="h6"> Name </Typography>
                    <Typography> Call me Srig! </Typography>
                </div>
                <div>
                    <Typography variant="h6"> Email </Typography>
                    <Typography> <a href="mailto:srig@srigmadeit.com"> srig@srigmadeit.com </a> </Typography>
                </div>
                <div>
                    <br />
                    <Typography variant="h6"> Other info </Typography>
                    <Typography>
                        Sophmore in High School
                    <br />
                    Located in Eastern Massachusetts
                    <br />
                    Sports videography and photography
                    <br />
                    Open to other videography and photography requests!
                </Typography>
                </div>
            </div>
            <img src={profilePic} className={classes.profilePicContainer} />
        </div>
    )
}

export default Contact;