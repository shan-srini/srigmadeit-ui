import { Container } from '@material-ui/core'
import React from 'react'
// import bootLogo from '../../assets/bootLogo.mp4'
import bootLogo from '../../assets/bootLogo.gif'
import style from './BootLogo.style.js'

const BootLogo = (props) => {
    const classes = style();
    const [display, setDisplay] = React.useState(true);
    const displayTime = 1500;
    setTimeout(() => {
        setDisplay(false);
    }, displayTime);
    setTimeout(() => {
        // I would like time logic to be isolated in this component
        // so props may contain a callback asking for whether this is visible or not
        props.setBootLogoVisible(false);
    }, displayTime - 700);
    return (
        display ?
            <Container maxWidth={false} id="loadingLogoContainer" className={classes.loadingLogoContainer}>
                <img alt="srigmadeit bootLogo" id="loadingLogo" className={classes.loadingLogo} src={bootLogo} />
                {/* <video autoPlay muted loop alt="srigmadeit bootLogo" id="loadingLogo" className={classes.loadingLogo}>
                    <source src={bootLogo} />
                </video> */}
            </Container>
            :
            null
    )
}

export default BootLogo;