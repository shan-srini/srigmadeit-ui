import React from 'react'
import { Container, Grid, TextField, Typography } from '@material-ui/core'
import srigmadeitAPI from '../../../services/srigmadeitAPI.service'
import style from './EventGrid.style.js'
import EventCard from '../card/EventCard.js'
import { Pagination } from '@material-ui/lab'

/**
 * props: 
 *  @param {boolean} pageable: if this page is pageable (home screen is only 1 for recents)
 */
const EventGrid = ({ pageable, pageHeadingText }) => {
    const classes = style();
    const [events, setEvents] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [perPageCount, setPerPageCount] = React.useState(4);
    const [totalPages, setTotalPages] = React.useState(1);
    const [searchText, setSearchText] = React.useState('');
    React.useEffect(() => {
        let mounted = true;
        getEvents();
        return () => mounted = false;
    }, [page]);

    const getEvents = (resetSearchName = false) => {
        let getPage = page - 1;
        srigmadeitAPI.getEvents(getPage, perPageCount, resetSearchName ? '' : searchText)
            .then(res => {
                setEvents(res.events);
                let totalCount = res.count;
                setTotalPages(Math.ceil(totalCount / perPageCount));
            });
    }

    return (
        <Container className={classes.eventCardsGridContainer}>
            <Container className={classes.headingAndSearchContainer}>
                <Typography variant="h5" className={classes.pageHeadingText}>{pageHeadingText}</Typography>
                {
                    pageable &&
                    <form onSubmit={(e) => { e.preventDefault(); getEvents(); }}>
                        <TextField
                            value={searchText}
                            label="Search"
                            onChange={(e) => setSearchText(e.target.value)}
                            inputProps={{ className: classes.input }}
                            InputProps={{
                                endAdornment:
                                    <Typography color="primary" variant="h6" onClick={() => { setSearchText(''); getEvents(true); }} style={{ cursor: 'pointer' }}>
                                        X
                                    </Typography>
                            }}
                        />
                        <input type="submit" style={{ display: 'none' }} />
                    </form>
                }
            </Container>
            <div className={classes.pageSelectorDivider}>
                {
                    pageable && <Pagination color="secondary" count={totalPages} page={page} onChange={(e, nv) => setPage(nv)} />
                }
            </div>
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