import React from 'react'
import style from './ManageGallery.style.js'
import { Container, Tab, Tabs, Paper, Typography } from '@material-ui/core'
import TabPanel from '../../../../components/ux/tabPanel/TabPanel.js'
import ManageEvents from './events/ManageEvents.js'
import ManageCategories from './categories/ManageCategories.js'

const ManageGallery = (props) => {
    const classes = style();
    const [eventName, setEventName] = React.useState("select event");
    const [tabValue, setTabValue] = React.useState(0);
    return (
        <Container>
            <Paper className={classes.galleryCurrentOptionsHeader}>
                <Typography variant="h4">Manage Gallery | Event: {eventName}</Typography>
            </Paper>
            <Tabs className={classes.galleryTypeTab} value={tabValue} onChange={(e, nV) => setTabValue(nV)}>
                <Tab label="Events" />
                <Tab label="Categories" disabled={!eventName} />
            </Tabs>
            <TabPanel value={tabValue} index={0}> <ManageEvents eventName={eventName} setEventName={setEventName} /> </TabPanel>
            <TabPanel value={tabValue} index={1}> <ManageCategories eventName={eventName} /> </TabPanel>
        </Container>
    )
}

export default ManageGallery;