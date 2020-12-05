import React from 'react'
import { Grid } from '@material-ui/core'
import srigmadeitAPI from '../../../services/srigmadeitAPI.service'
import style from './EventPage.style.js'
import EventCard from '../card/EventCard.js'

/**
 * props: 
 *  @param {boolean} pageable: if this page is pageable (home screen is only 1 for recents)
 */
const EventGrid = (props) => {
    const classes = style();
    // Events ***
    const [events, setEvents] = React.useState([]);
    React.useEffect(() => {
        let mounted = true;
        srigmadeitAPI.getEvents(0, 4).then((events) => events && setEvents(events));
        return () => mounted = false;
    }, []);
    // end Events ***
    return (
        <Grid className={classes.eventPageContainer} container spacing={3}>
            {events.map(item =>
                <Grid item xs={12} md={6} className={classes.eventCardGridContainer}>
                    <EventCard eventMeta={item} />
                </Grid>
            )}
        </Grid>
    )
};

export default EventGrid;