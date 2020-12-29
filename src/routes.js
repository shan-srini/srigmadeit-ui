const srigmadeitBaseURL = process.env.NODE_ENV === 'development' ? 'http://192.168.1.202:5000/api' : ''

const routes = {
    home: "/",
    events: '/events',
    photos: '/photos',
    videos: '/videos',
    contact: '/contact',
    upload: '/upload',
    notFound: '/404',
    services: {
        srigmadeit: {
            events: srigmadeitBaseURL + '/events',
            eventMeta: (eventId) => srigmadeitBaseURL + `/events/${eventId}`,
            categories: (eventId) => srigmadeitBaseURL + `/events/${eventId}/categories`,
            media: (eventId, categoryId) => srigmadeitBaseURL + `/events/${eventId}/categories/${categoryId}/media`,
            getMedia: (categoryId) => srigmadeitBaseURL + `/media?categoryId=${categoryId}`,
            login: srigmadeitBaseURL + '/login'
        }
    },
    dataSources: {
        cos: "https://photos.srigmadeit.com/file/srigmadeit/",
        youtube: "",
        ORACLEcos: "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idcgvw3idubd/b/srigmadeit-object-bucket/o/",
        IBMcos: "https://srigmadeit-storage-cos-standard-s6x.s3.us-east.cloud-object-storage.appdomain.cloud/",
    }
}

export default routes;