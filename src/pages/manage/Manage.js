import React from 'react'
import Login from './login/Login.js'
import ManageContent from './manageContent/ManageContent'
import CloudStorageContext from './CloudStorageContext.js'

const Upload = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [cosConfig, setCosConfig] = React.useState({});
    return (
        !loggedIn ?
            <Login setCosConfig={(value) => setCosConfig(value)} setLoggedIn={(value) => setLoggedIn(value)} />
            :
            <CloudStorageContext.Provider value={cosConfig}>
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    <ManageContent />
                </div>
            </CloudStorageContext.Provider>
    )
}

export default Upload;

