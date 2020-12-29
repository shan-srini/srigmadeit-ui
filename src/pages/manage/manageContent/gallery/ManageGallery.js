import React, { useEffect, useState } from 'react'
import style from './ManageGallery.style.js'
import { Container, Tab, Tabs, Paper, Typography } from '@material-ui/core'
import TabPanel from '../../../../components/ux/tabPanel/TabPanel.js'
import ManageEvents from './events/ManageEvents.js'
import ManageCategories from './categories/ManageCategories.js'
import srigMadeItAPI from '../../../../services/srigmadeitAPI.service.js'

const ManageGallery = (props) => {
    const classes = style();
    const [allEventsMeta, setAllEventsMeta] = useState([]);
    const [eventId, setEventId] = useState();
    const [tabValue, setTabValue] = useState(0);
    const { cosConfig } = props;
    useEffect(() => {
        // just get the first 500 events, one time expensive call for ease.
        srigMadeItAPI.getEvents(0, 500).then((ret) => { setAllEventsMeta(ret.events); setEventId(ret.events[0]._id); });
    }, []);
    return (
        <Container>
            <Paper className={classes.galleryCurrentOptionsHeader}>
                <Typography variant="h4">Manage Gallery | Event:
                    <select onChange={(e) => setEventId(e.target.value)}>
                        {allEventsMeta.map((eventMeta) => {
                            return <option key={eventMeta.name} value={eventMeta._id} > {eventMeta.name} </option>
                        })}
                    </select>
                </Typography>
            </Paper>
            <Tabs className={classes.galleryTypeTab} value={tabValue} onChange={(e, nV) => setTabValue(nV)}>
                <Tab label="Events" />
                <Tab label="Categories" disabled={!eventId} />
            </Tabs>
            <TabPanel value={tabValue} index={0}> <ManageEvents cosConfig={cosConfig} eventId={eventId} /> </TabPanel>
            <TabPanel value={tabValue} index={1}> <ManageCategories cosConfig={cosConfig} eventId={eventId} /> </TabPanel>
        </Container>
    )
}

export default ManageGallery;