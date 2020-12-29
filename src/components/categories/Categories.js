import React, { useEffect } from 'react'
import { Tabs, Tab, Container } from '@material-ui/core';
import TabPanel from '../ux/tabPanel/TabPanel'
import Photos from '../photos/Photos'

const Categories = ({ categories, startTab }) => {
    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (e, value) => {
        setTabValue(value);
    }
    useEffect(() => { if (startTab) setTabValue(startTab) }, [startTab]);
    return (
        <React.Fragment>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="secondary"
            >
                {
                    categories.map((categoryMeta) => <Tab key={categoryMeta.name} label={categoryMeta.name} />)
                }
            </Tabs>
            {
                categories.map((categoryMeta, index) =>
                    <TabPanel key={categoryMeta._id} value={tabValue} index={index} label={categoryMeta.name}>
                        <div>
                            <Photos categoryId={categoryMeta._id} />
                        </div>
                    </TabPanel>
                )
            }
        </React.Fragment>
    )
}

export default Categories;