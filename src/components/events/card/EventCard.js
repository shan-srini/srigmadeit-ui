import React from 'react'
import { Paper, Typography, Container } from '@material-ui/core';
import style from './EventCard.style.js'
import { mediaMetaToURL } from '../../../services/srigmadeitAPI.service.js';
import LazyImage from '../../ux/LazyImage/LazyImage.js';

const EventCard = ({ eventMeta }) => {
    const classes = style();
    const eventBackgroundSrc = mediaMetaToURL(eventMeta);
    const { name } = eventMeta;
    let { timestamp } = eventMeta;
    if (eventMeta.timestamp) {
        let dateOb = new Date(eventMeta.timestamp);
        timestamp = `${dateOb.getUTCMonth() + 1}/${dateOb.getUTCDate()}/${dateOb.getUTCFullYear()}`
    }
    return (
        <Container className={classes.eventCardContainer} elevation={20}>
            <Paper className={classes.eventCardPictureContainer}>
                <LazyImage className={classes.eventCardPicture} src={eventBackgroundSrc} />
            </Paper>
            <Typography variant="h6" style={{ color: 'black' }}> {name} </Typography>
            <Typography variant="subtitle" style={{ padding: "5px", borderRadius: "15px", backgroundColor: 'black' }}> {timestamp} </Typography>
        </Container>
    )
};

export default EventCard;