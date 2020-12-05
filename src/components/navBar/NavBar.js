import React from 'react'
import { AppBar, Toolbar, Typography, Backdrop, Container, Tooltip } from '@material-ui/core'
import SmiLogo from '../../assets/SmiLogo.png'
import style from './NavBar.style.js'
import { useHistory } from 'react-router-dom'

const NavBarOptions = ({ classes, history, hideOnSmall }) => {
    const textVariant = hideOnSmall ? "h5" : "h2";
    return (
        <React.Fragment>
            <Tooltip title="View events">
                <Typography onClick={() => history.push("/events")} className={`${classes.navBarItem} ${hideOnSmall && classes.events}`} variant={textVariant}>events</Typography>
            </Tooltip>
            <Tooltip title="Check out my favorite photos">
                <Typography onClick={() => history.push("/photos")} className={`${classes.navBarItem} ${hideOnSmall && classes.photos}`} variant={textVariant}>photos</Typography>
            </Tooltip>
            <Tooltip title="My video work">
                <Typography onClick={() => history.push("/videos")} className={`${classes.navBarItem} ${hideOnSmall && classes.videos}`} variant={textVariant}>videos</Typography>
            </Tooltip>
            <Tooltip title="Contact Me!">
                <Typography onClick={() => history.push("/contact")} className={`${classes.navBarItem} ${hideOnSmall && classes.contact}`} variant={textVariant}>contact</Typography>
            </Tooltip>
        </React.Fragment>
    )
}

const NavBar = (props) => {
    const classes = style();
    const history = useHistory();
    const [open, setOpen] = React.useState(false)
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.navBar}>
                <NavBarOptions classes={classes} history={history} hideOnSmall={true} />
                <Tooltip title="Home">
                    <img src={SmiLogo} onClick={() => history.push("/")} className={`${classes.navBarItem} ${classes.smiLogo}`} />
                </Tooltip>
                <div onClick={() => setOpen(!open)} className={`${classes.navBarItem} ${classes.menuButton}`}>
                    <div className={`${classes.hamburgerBar} ${open ? classes.bar1Transition : ''}`} />
                    <div className={`${classes.hamburgerBar} ${open ? classes.bar2Transition : ''}`} />
                    <div className={`${classes.hamburgerBar} ${open ? classes.bar3Transition : ''}`} />
                </div>
                <Backdrop open={open} onClick={() => { setOpen(!open) }}>
                    <Container className={classes.collapsedPageNavBarOptions}>
                        <NavBarOptions classes={classes} history={history} hideOnSmall={false} />
                    </Container>
                </Backdrop>
            </Toolbar>
        </AppBar >
    );
};

export default NavBar;