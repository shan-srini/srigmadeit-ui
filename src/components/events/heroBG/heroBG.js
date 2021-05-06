import React from 'react'
import { Container, Typography, Paper } from '@material-ui/core';
import style from './heroBG.style'

const HeroBG = ({ backgroundSrc, eventName, timestamp }) => {
    const classes = style();
    backgroundSrc = new URL(backgroundSrc); // to url encode
    return (
        <Container className={classes.heroImageContainer}>
            <Container className={classes.heroImage} style={{ backgroundImage: `url("${backgroundSrc}")` }}>
                <Paper elevation={10} className={classes.eventMetaBar}>
                    <Typography variant="h3">{eventName}</Typography>
                    <Typography variant="h5">{timestamp}</Typography>
                </Paper>
            </Container>
        </Container>
    )
}

export default HeroBG;
