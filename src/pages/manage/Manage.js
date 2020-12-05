import React from 'react'
import Login from './login/Login.js'
import ManageContent from './manageContent/ManageContent'
import CloudStorageContext from './CloudStorageContext.js'

const Upload = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [ibmConfig, setIbmConfig] = React.useState({});
    return (
        !loggedIn ?
            <Login setIbmConfig={(value) => setIbmConfig(value)} setLoggedIn={(value) => setLoggedIn(value)} />
            :
            <CloudStorageContext.Provider value={ibmConfig}>
                <ManageContent />
            </CloudStorageContext.Provider>
    )
}

export default Upload;

