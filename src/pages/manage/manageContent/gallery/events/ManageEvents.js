import React from 'react';
import { Container, TextField, Typography, Button, Select, MenuItem } from '@material-ui/core';
import style from './ManageEvents.style.js';
import srigmadeitAPI from '../../../../../services/srigmadeitAPI.service.js';
import storageAPI from '../../../../../services/ibmCOS.service.js';
import CloudStorageContext from '../../../CloudStorageContext.js'

const ManageEvents = (props) => {
    const classes = style();
    const ibmConfig = React.useContext(CloudStorageContext);
    const [creatEventName, setCreateEventName] = React.useState("");
    const [timestamp, setTimestamp] = React.useState();
    const eventPic = React.useRef(null);
    const [loadingStatusText, setLoadingStatusText] = React.useState("Waiting upload info");


    return (
        <Container className={classes.manageEventsContainer}>
            <form className={classes.createEventContainer} onSubmit={(e) => handleCreateEventSubmit(e, ibmConfig, creatEventName, timestamp, eventPic, setLoadingStatusText)}>
                <Typography variant="h6">Create Event</Typography>
                <TextField required label="Event Name" variant="outlined" onChange={(e) => setCreateEventName(e.target.value)}></TextField>
                <TextField required label="Timestamp" type="date" variant="outlined" onChange={(e) => setTimestamp(e.target.value)} InputLabelProps={{ shrink: true, }}></TextField>
                <Typography> Select image as profile photo of event </Typography>
                <input required id="uploadEvent" ref={eventPic} type="file" accept="image/*" />
                <Button type="submit" value="submit" variant="contained" color="secondary"> Submit </Button>
                <Typography> Loading Status: {loadingStatusText} </Typography>
            </form>
            <EditEvent classes={classes} {...props} />
        </Container >
    )
}

async function handleCreateEventSubmit(event, ibmConfig, eventName, timestamp, eventPic, setLoadingStatusText) {
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
    }
    try {
        await storageAPI.uploadCOS(ibmConfig, [eventPicID], eventPic, setLoadingStatusText);
    }
    catch (err) {
        // photo upload failed...
    }
}

const EditEvent = ({ classes, eventName, setEventName }) => {
    const eventPic = React.useRef(null);
    const [editEventsOptions, setEditEventOptions] = React.useState([]);
    const [selectedEvent, setSelectedEvent] = React.useState();
    const [editEventName, setEditEventName] = React.useState("select event");
    const [editTimestamp, setTimestamp] = React.useState();
    React.useEffect(() => {
        srigmadeitAPI.getEvents().then((res) => setEditEventOptions(res))
    }, []);
    return (
        <form disabled className={classes.editEventContainer} onSubmit={(e) => handleEditEventSubmit(e, ibmConfig, creatEventName, timestamp, eventPic, setLoadingStatusText)}>
            <Typography variant="h6">Edit Event - {
                <Select value={editEventName} onChange={(e) => { setEventName(e.target.value.name); setSelectedEvent(e.target.value); setEditEventName(e.target.value.name); }}>
                    {editEventsOptions.map((eventMeta) => {
                        { console.log(eventMeta) }
                        return <MenuItem key={eventMeta.name} style={{ color: 'black' }} value={eventMeta}> {eventMeta.name}</MenuItem>
                    })}
                </Select>
            }</Typography>
            <TextField value={editEventName} label="Edit Event Name" variant="outlined" onChange={(e) => setEditEventName(e.target.value)}></TextField>
            <Typography>{selectedEvent && new Date(selectedEvent.timestamp).toISOString()}</Typography>
            <TextField value={editTimestamp} label="Edit Timestamp" type="date" variant="outlined" onChange={(e) => setEditTimestamp(e.target.value)} InputLabelProps={{ shrink: true, }}></TextField>
            <Typography> Select image as profile photo of event </Typography>
            <input required id="uploadEvent" ref={eventPic} type="file" accept="image/*" />
            <Button type="submit" value="submit" variant="contained" color="secondary"> Submit </Button>
            {/* <Typography> Loading Status: {loadingStatusText} </Typography> */}
        </form>
    )
}

async function handleEditEventSubmit(event, ibmConfig, eventName, timestamp, eventPic, setLoadingStatusText) {
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
    }
    try {
        await storageAPI.uploadCOS(ibmConfig, [eventPicID], eventPic, setLoadingStatusText);
    }
    catch (err) {
        // photo upload failed...
    }
}

export default ManageEvents;