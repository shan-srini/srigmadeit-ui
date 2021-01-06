import React from 'react'
import { Typography, Tooltip } from '@material-ui/core'
import style from './Footer.style'

const Footer = (props) => {
    const classes = style();

    return (
        <footer className={classes.footer}>
            <div className={classes.siteNameContainer}>
                <Typography variant="overline" style={{ fontSize: '24px' }}> <small>&copy;</small>SRIGMADEIT </Typography>
                <a href="https://www.instagram.com/srigmadeit/?hl=en" target="_blank" className={classes.link}>
                    <img height="25" width="25" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384031.svg" />
                </a>
            </div>
            <div className={classes.peopleInfoContainer}>
                <Tooltip title="Content by:" placement="left-start">
                    <Typography className={classes.peopleInfo}>
                        Srig Srinivasan
                        <br />
                        <a href="mailto:srig@srigmadeit.com" className={classes.email}> srig@srigmadeit.com </a>
                        <br />
                        <a href="https://www.instagram.com/srig_s/?hl=en" target="_blank" className={classes.link}>
                            <img height="25" width="25" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384031.svg" className={classes.instagramIcon} />
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
                        <a href="https://www.instagram.com/s.h.4.n/?hl=en" target="_blank" className={classes.link}>
                            <img height="25" width="25" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384031.svg" className={classes.instagramIcon} />
                            s.h.4.n
                        </a>
                    </Typography>
                </Tooltip>
            </div>
        </footer>
    )
}

export default Footer;