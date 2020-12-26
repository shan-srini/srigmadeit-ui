import React from 'react'
import { AppBar, Toolbar, Typography, Backdrop, Container, Tooltip } from '@material-ui/core'
import SmiLogo from '../../assets/SmiLogo.png'
import style from './NavBar.style.js'
import { Link, useHistory } from 'react-router-dom'
import routes from '../../routes.js'

const NavBarOptions = ({ classes, history, hideOnSmall }) => {
    const textVariant = hideOnSmall ? "h5" : "h2";
    return (
        <React.Fragment>
            <Tooltip title="View events">
                <Link to={routes.events} className={`${classes.navBarItem} ${hideOnSmall && classes.events}`}>
                    <Typography variant={textVariant}>events</Typography>
                </Link>
            </Tooltip>
            <Tooltip title="Check out my favorite photos">
                <Link to={routes.photos} className={`${classes.navBarItem} ${hideOnSmall && classes.photos}`}>
                    <Typography variant={textVariant}>photos</Typography>
                </Link>
            </Tooltip>
            <Tooltip title="My video work">
                <Link to={routes.videos} className={`${classes.navBarItem} ${hideOnSmall && classes.videos}`}>
                    <Typography variant={textVariant}>videos</Typography>
                </Link>
            </Tooltip>
            <Tooltip title="Contact Me!">
                <Link to={routes.contact} className={`${classes.navBarItem} ${hideOnSmall && classes.contact}`}>
                    <Typography variant={textVariant}>contact</Typography>
                </Link>
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