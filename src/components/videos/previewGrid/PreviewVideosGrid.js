import React, { useEffect, useState } from 'react'
import PreviewVideoCard from '../previewCard/PreviewVideoCard'
import { Tabs, Tab } from '@material-ui/core'
import style from './PreviewVideosGrid.style'

const PreviewVideosGrid = ({ videos, setSelectedVideoMeta }) => {
    const classes = style();
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (videos.length > value) setSelectedVideoMeta(videos[value]);
    }, [videos])

    const handleSelectedVideo = (e, nv) => {
        setValue(nv);
        setSelectedVideoMeta(videos[nv]);
    }

    return (
        <div className={classes.previewVideosGridContainer}>
            <Tabs
                value={value}
                onChange={handleSelectedVideo}
                variant='scrollable'
                scrollButtons='on'
            >
                {videos.map((videoMeta, index) =>
                    <Tab key={index} icon={<PreviewVideoCard videoMeta={videoMeta} />} />
                )}
            </Tabs>
        </div>
    )
}

export default PreviewVideosGrid;