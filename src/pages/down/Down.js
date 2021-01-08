import React from 'react'

const Down = () => {
    return (
        <div style={{
            height: '90vh',
            width: '100vw',
            overflow: 'hidden',
            padding: '16px',
        }}>
            <h1 style={{
                fontSize: '24px',
                textAlign: 'center',
                marginTop: '20%',
                color: 'skyblue'
            }}>
                The site is currently under maintenance, please check back in an hour.
                <br />
                If you think you are seeing this message in error, please email shan@srigmadeit.com
            </h1>
        </div>
    )
}

export default Down;