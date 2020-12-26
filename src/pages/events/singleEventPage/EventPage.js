import React from 'react';
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'


const Events = (props) => {
    const { eventName } = useParams()
    return (
        <Container style={{ paddingTop: '10vh' }}>
            evnt: {eventName}
        </Container>
    )
}

export default Events;