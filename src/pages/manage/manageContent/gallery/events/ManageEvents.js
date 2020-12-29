import React from 'react';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import style from './ManageEvents.style.js';
import srigmadeitAPI from '../../../../../services/srigmadeitAPI.service.js';
import storageAPI from '../../../../../services/objectStorage.service.js';

const ManageEvents = (props) => {
    const classes = style();
    const { cosConfig } = props;

    return (
        <Container className={classes.manageEventsContainer}>
            <CreateEvent classes={classes} cosConfig={cosConfig} />
            <EditEvent classes={classes} cosConfig={cosConfig} {...props} />
        </Container >
    )
}

const CreateEvent = ({ classes, cosConfig }) => {
    const [createEventName, setCreateEventName] = React.useState("");
    const [timestamp, setTimestamp] = React.useState();
    const eventPic = React.useRef(null);
    const [loadingStatusText, setLoadingStatusText] = React.useState("Waiting upload info");

    return (
        <form className={classes.createEventContainer} onSubmit={(e) => handleCreateEventSubmit(e, cosConfig, createEventName, timestamp, eventPic, setLoadingStatusText)}>
            <Typography variant="h6">Create Event</Typography>
            <TextField required label="Event Name" variant="outlined" onChange={(e) => setCreateEventName(e.target.value)}></TextField>
            <TextField required label="Timestamp" type="date" variant="outlined" onChange={(e) => setTimestamp(e.target.value)} InputLabelProps={{ shrink: true, }}></TextField>
            <Typography> Select image as profile photo of event </Typography>
            <input required id="uploadEvent" ref={eventPic} type="file" accept="image/*" />
            <Button type="submit" value="submit" variant="contained" color="secondary"> Submit </Button>
            <Typography> Loading Status: {loadingStatusText} </Typography>
        </form>
    )
}

async function handleCreateEventSubmit(event, cosConfig, eventName, timestamp, eventPic, setLoadingStatusText) {
    event.preventDefault();
    eventPic = [...eventPic.current.files];
    let eventPicID;
    setLoadingStatusText("Attempting to create unique event ids on srigmadeitAPI");
    try {
        eventPicID = await srigmadeitAPI.createEvent(eventName, timestamp);
    }
    catch (err) {
        window.alert("Upload failed, most likely a duplicate name. Try again.")
        setLoadingStatusText("ERROR from srigmadeitAPI, did you try creating a duplicate event? Try again. ")
        return;
    }
    try {
        await storageAPI.uploadCOS(cosConfig, [eventPicID], eventPic, setLoadingStatusText);
    }
    catch (err) {
        // photo upload failed...
        window.alert(err)
    }
}

const EditEvent = ({ classes, cosConfig, eventName }) => {
    const eventPic = React.useRef(null);
    return (
        <Container className={classes.editEventContainer}>
            <Typography variant="h6">
                Edit Event: {eventName}
            </Typography>
        </Container>
    )
}

async function handleEditEventSubmit(event, cosConfig) {
    event.preventDefault();

}

export default ManageEvents;