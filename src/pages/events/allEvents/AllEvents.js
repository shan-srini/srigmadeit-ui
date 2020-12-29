import React from 'react';
import { Container } from '@material-ui/core'
import EventGrid from '../../../components/events/grid/EventGrid'
import style from './AllEvents.style'

const Events = (props) => {
    const classes = style();
    return (
        <Container className={classes.allEventsContainer}>
            <EventGrid pageable pageHeadingText="All Events" />
        </Container>
    )
}

export default Events;