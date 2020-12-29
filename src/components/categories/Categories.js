import React, { useEffect } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from '../ux/tabPanel/TabPanel'
import Photos from '../photos/Photos'
import routes from '../../routes'

const Categories = ({ categories, startTab, eventUrlId }) => {
    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (e, value) => {
        setTabValue(value);
        history.pushState(null, '', `${routes.events}/${eventUrlId}/${categories[value].name}`);
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