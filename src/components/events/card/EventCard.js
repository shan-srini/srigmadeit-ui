import React from 'react'
import { Paper, Typography, Container } from '@material-ui/core';
import style from './EventCard.style.js'
import { mediaMetaToURL } from '../../../services/srigmadeitAPI.service.js';
import LazyImage from '../../ux/LazyImage/LazyImage.js';
import { Link } from 'react-router-dom';
import routes from '../../../routes.js';

const EventCard = ({ eventMeta }) => {
    const classes = style();
    const eventBackgroundSrc = mediaMetaToURL(eventMeta);
    const { name, _id } = eventMeta;
    let { timestamp } = eventMeta;
    if (eventMeta.timestamp) {
        let dateOb = new Date(eventMeta.timestamp * 1000); // python datetime uses seconds, javascript uses milliseconds...
        timestamp = `${dateOb.getUTCMonth() + 1}/${dateOb.getUTCDate()}/${dateOb.getUTCFullYear()}`
    }
    return (
        <Container className={classes.eventCardContainer} elevation={20}>
            <Link to={routes.events + '/' + _id} style={{ textDecoration: 'none' }}>
                <Paper className={classes.eventCardPictureContainer}>
                    <LazyImage className={classes.eventCardPicture} src={eventBackgroundSrc} />
                </Paper>
                <Typography variant="h6" className={classes.eventTitle}> {name} </Typography>
                <Typography variant="subtitle2" className={classes.eventTimestamp}> {timestamp} </Typography>
            </Link>
        </Container>
    )
};

export default EventCard;