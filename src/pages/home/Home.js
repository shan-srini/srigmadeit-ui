import { Container } from '@material-ui/core'
import React from 'react'
import BootLogo from '../../components/bootLogo/BootLogo.js'
import style from './Home.style.js'
import EventGrid from '../../components/events/grid/EventGrid'
import Bg from './HomeBackground'

const Home = () => {
    const classes = style();
    const [bootLogoVisible, setBootLogoVisible] = React.useState(true);

    return (
        <React.Fragment>
            <BootLogo setBootLogoVisible={setBootLogoVisible} />
            <div className={classes.homeContainer} style={bootLogoVisible ? { display: 'none' } : {}}>
                <Bg className={classes.homeBackground} />
                <Container className={classes.recentEventsContainer} maxWidth={false}>
                    <EventGrid pageable={false} pageHeadingText="Recent Events" />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Home;