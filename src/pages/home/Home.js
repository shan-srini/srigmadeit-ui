import { Container } from '@material-ui/core'
import React, { lazy } from 'react'
import BootLogo from '../../components/bootLogo/BootLogo.js'
import style from './Home.style.js'
import EventGrid from '../../components/events/grid/EventGrid'
import ScrollUpDownArrow from '../../components/ux/ScrollUpDownArrow/ScrollUpDownArrow.js'

const Home = () => {
    const classes = style();
    const [bootLogoVisible, setBootLogoVisible] = React.useState(true);

    return (
        <React.Fragment>
            <BootLogo setBootLogoVisible={setBootLogoVisible} />
            <Container className={classes.homeContainer} maxWidth={false} style={bootLogoVisible ? { display: 'none' } : {}}>
                <Container className={classes.recentEventsContainer} maxWidth={false}>
                    {/* <ScrollUpDownArrow className={classes.scrollUpDownArrow} /> */}
                    <EventGrid pageable={false} />
                </Container>
            </Container>
        </React.Fragment>
    );
}

export default Home;