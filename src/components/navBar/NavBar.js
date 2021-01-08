import React from 'react'
import { AppBar, Toolbar, Typography, Backdrop, Container, Tooltip } from '@material-ui/core'
import SmiLogo from '../../../public/logo192.png'
import style from './NavBar.style.js'
import { Link, useHistory } from 'react-router-dom'
import routes from '../../routes.js'
import CloseButton from '../../components/ux/closeButton/CloseButton'

const NavBarOptions = ({ classes, hideOnSmall }) => {
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
    const [open, setOpen] = React.useState(false);

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.navBar}>
                <NavBarOptions classes={classes} history={history} hideOnSmall={true} />
                <Tooltip title="Home">
                    <img src={SmiLogo} onClick={() => history.push("/")} className={`${classes.navBarItem} ${classes.smiLogo}`} alt="srigmadeit logo" />
                </Tooltip>

                <div onClick={() => setOpen(!open)} className={`${classes.navBarItem} ${classes.menuButton}`}>
                    <CloseButton open={open} onClick={() => setOpen(!open)} />
                </div>
                <Backdrop open={open} onClick={() => { setOpen(!open) }}>
                    <div style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, .1)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', zIndex: -1 }}></div>
                    <Container className={classes.collapsedPageNavBarOptions}>
                        <NavBarOptions classes={classes} history={history} hideOnSmall={false} />
                    </Container>
                </Backdrop>
            </Toolbar>
        </AppBar >
    );
};

export default NavBar;