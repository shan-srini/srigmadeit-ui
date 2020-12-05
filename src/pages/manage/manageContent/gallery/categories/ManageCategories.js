import React from 'react'
import { Container } from '@material-ui/core'

const ManageCategories = (props) => {
    const { eventName } = props;
    return (
        <div>
            Manage Categories for {eventName}
        </div>
    )
}

export default ManageCategories;