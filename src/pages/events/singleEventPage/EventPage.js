import React, { useEffect } from 'react';
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import srigmadeitAPI from '../../../services/srigmadeitAPI.service'
import routes from '../../../routes'
import EventHeroBG from '../../../components/events/heroBG/heroBG'
import Categories from '../../../components/categories/categories'

const EventPage = (props) => {
    const { eventId, categoryName } = useParams();
    const [eventName, setEventName] = React.useState(props.location.eventName);
    const [timestamp, setTimestamp] = React.useState(props.location.timestamp);
    const [categories, setCategories] = React.useState([]);
    const [startTab, setStartTab] = React.useState(null);
    useEffect(() => {
        srigmadeitAPI.getEventMeta(eventId).then((res) => {
            // if someone is navigating to a specific category for this event, just double check it exists
            if (categoryName) {
                let categoryNameLower = categoryName.toLowerCase();
                let foundIndex;
                if ((foundIndex = res.categories.findIndex((categoryMeta) => categoryMeta.name.toLowerCase() === categoryNameLower)) === -1)
                    window.location.href = routes.notFound;
                else
                    setStartTab(foundIndex);
            }
            // set presentational info
            if (!eventName) // may have been passed if page is being accessed from EventCard
                setEventName(res.event_meta.name);
            if (!timestamp) { // may have been passed if page is being accessed from EventCard
                let dateOb = new Date(res.event_meta.timestamp * 1000); // python datetime uses seconds, javascript uses milliseconds...
                setTimestamp(`${dateOb.getUTCMonth() + 1}/${dateOb.getUTCDate()}/${dateOb.getUTCFullYear()}`);
            }
            setCategories(res.categories);
        })
    }, []);

    return (
        <div style={{ marginTop: '64px' }}>
            <EventHeroBG backgroundSrc={routes.dataSources.cos + eventId} eventName={eventName} timestamp={timestamp} />
            <Categories categories={categories} startTab={startTab} />
        </div>
    )
}

export default EventPage;