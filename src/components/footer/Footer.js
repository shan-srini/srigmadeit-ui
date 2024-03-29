import React from 'react'
import { Typography, Tooltip } from '@material-ui/core'
import style from './Footer.style'

const Footer = (props) => {
    const classes = style();

    return (
        <footer className={classes.footer}>
            <div className={classes.siteNameContainer}>
                <Typography variant="overline" style={{ fontSize: '24px' }}> SRIGMADEIT<small style={{ fontSize: '12px' }}>&copy;2020</small> </Typography>
                <a href="https://www.instagram.com/srigmadeit/?hl=en" target="_blank" className={classes.link} rel="noreferrer">
                    <img title="Srigmadeit Instagram icon" height="25" width="25" src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" alt="Instagram icon" />
                </a>
            </div>
            <div className={classes.peopleInfoContainer}>
                <Tooltip title="Content by:" placement="left-start">
                    <Typography className={classes.peopleInfo}>
                        Srig Srinivasan
                        <br />
                        <a href="mailto:srig@srigmadeit.com" className={classes.email}> srig@srigmadeit.com </a>
                        <br />
                        <a href="https://www.instagram.com/7srig/?hl=en" target="_blank" className={classes.link} rel="noreferrer">
                            <img height="25" width="25" src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" className={classes.instagramIcon} alt="Instagram icon" />
                            srig_s
                        </a>
                    </Typography>
                </Tooltip>
                <Tooltip title="Site developed by:" placement="left-start">
                    <Typography className={classes.peopleInfo}>
                        Shan Srinivasan
                        <br />
                        <a href="mailto:shan@srigmadeit.com" className={classes.email}> shan@srigmadeit.com </a>
                        <br />
                        <a href="https://www.instagram.com/s.h.4.n/?hl=en" target="_blank" className={classes.link} rel="noreferrer">
                            <img height="25" width="25" src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" className={classes.instagramIcon} alt="Instagram icon" />
                            s.h.4.n
                        </a>
                    </Typography>
                </Tooltip>
            </div>
        </footer>
    )
}

export default Footer;
