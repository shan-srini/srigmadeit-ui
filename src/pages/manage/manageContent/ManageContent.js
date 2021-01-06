import React from 'react';
import { Tabs, Tab, Container, Popover } from '@material-ui/core'
import TabPanel from '../../../components/ux/tabPanel/TabPanel.js'
import style from './ManageContent.style.js'
import ManageGallery from './gallery/ManageGallery.js'
import ManageStaticPhotos from './staticPhotos/ManageStaticPhotos.js'
import ManageVideos from './videos/ManageVideos.js'
import CloudStorageContext from '../CloudStorageContext.js'

const ManageContent = (props) => {
    const classes = style();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const cosConfig = React.useContext(CloudStorageContext)

    return (
        <Container className={classes.manageContentContainer}>
            <div className={classes.navPopoverButton} onClick={(event) => setAnchorEl(event.currentTarget)}>
                <div style={{ width: '35px', height: '4px', backgroundColor: 'white', margin: '3px 0' }} />
                <div style={{ width: '35px', height: '4px', backgroundColor: 'white', margin: '3px 0' }} />
                <div style={{ width: '35px', height: '4px', backgroundColor: 'white', margin: '3px 0' }} />
            </div>
            <Popover
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Tabs
                    orientation="vertical"
                    value={value}
                    indicatorColor="secondary"
                    textColor="primary"
                    onChange={(e, value) => { setValue(value) }}
                >
                    <Tab label="Events & categories " />
                    <Tab label="Static Photos" />
                    <Tab label="Videos" />
                </Tabs>
            </Popover>
            <TabPanel value={value} index={0}>
                <ManageGallery cosConfig={cosConfig.photos} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ManageStaticPhotos cosConfig={cosConfig.photos} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ManageVideos cosConfig={cosConfig} />
            </TabPanel>
        </Container >
    );
}



export default ManageContent;

