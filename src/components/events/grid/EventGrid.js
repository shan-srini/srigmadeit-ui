import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import srigmadeitAPI from '../../../services/srigmadeitAPI.service'
import style from './EventGrid.style.js'
import EventCard from '../card/EventCard.js'

/**
 * props: 
 *  @param {boolean} pageable: if this page is pageable (home screen is only 1 for recents)
 */
const EventGrid = ({ pageable }) => {
    const classes = style();
    const [events, setEvents] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [count, setCount] = React.useState(4);
    const pageHeadingText = pageable ? 'All events' : 'Recent events';
    React.useEffect(() => {
        let mounted = true;
        srigmadeitAPI.getEvents(page, count).then((events) => events && setEvents(events));
        return () => mounted = false;
    }, [page]);
    return (
        <Container className={classes.eventCardsGridContainer}>
            <Typography variant="h6" className={classes.pageHeadingText}>{pageHeadingText}</Typography>
            <div className={classes.pageSelectorDivider}> {pageable ? '1 2' : ''}</div>
            <Grid className={classes.eventCardsGridContainer} container spacing={3}>
                {events.map(item =>
                    <Grid item xs={12} md={6} key={item._id} className={classes.eventCardGridContainer}>
                        <EventCard eventMeta={item} />
                    </Grid>
                )}
            </Grid>
        </Container>
    )
};

export default EventGrid;