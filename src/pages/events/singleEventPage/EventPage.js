import React, { useEffect } from 'react';
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import srigmadeitAPI from '../../../services/srigmadeitAPI.service'
import routes from '../../../routes'
import EventHeroBG from '../../../components/events/heroBG/heroBG'

const EventPage = (props) => {
    const { eventId, categoryName } = useParams();
    const [eventName, setEventName] = React.useState(props.eventName);
    const [timestamp, setTimestamp] = React.useState(props.timestamp);
    const [categories, setCategories] = React.useState([])
    useEffect(() => {
        if (!eventName || !timestamp)
            srigmadeitAPI.getEventMeta(eventId).then((res) => {
                // if someone is navigating to a specific category for this event, just double check it exists
                if (categoryName) {
                    if (res.categories.findIndex((categoryMeta) => categoryMeta.name === categoryName) === -1)
                        window.location.href = routes.notFound
                }
                // set presentational info
                if (!eventName)
                    setEventName(res.event_meta.name);
                if (!timestamp) {
                    let dateOb = new Date(res.event_meta.timestamp * 1000); // python datetime uses seconds, javascript uses milliseconds...
                    setTimestamp(`${dateOb.getUTCMonth() + 1}/${dateOb.getUTCDate()}/${dateOb.getUTCFullYear()}`);
                }
                setCategories(res.categories);
            })
    }, []);

    return (
        <div style={{ marginTop: '64px' }}>
            <EventHeroBG backgroundSrc={routes.dataSources.cos + eventId} eventName={eventName} timestamp={timestamp} />
        </div>
    )
}

export default EventPage;