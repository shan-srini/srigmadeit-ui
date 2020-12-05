const srigmadeitBaseURL = process.env.NODE_ENV == 'development' ? 'http://192.168.1.202:5000/api' : 'http://192.168.1.202:5000/api'

const routes = {
    home: "/",
    services: {
        srigmadeit: {
            events: srigmadeitBaseURL + '/events',
            categories: (eventName) => srigmadeitBaseURL + `/events/${eventName}/categories`,
            media: (eventName, categoryName) => srigmadeitBaseURL + `/events/${eventName}/categories/${categoryName}/media`,
            login: srigmadeitBaseURL + '/login'
        }
    },
    dataSources: {
        cos: "https://srigmadeit-storage-cos-standard-s6x.s3.us-east.cloud-object-storage.appdomain.cloud/",
        youtube: ""
    }
}

export default routes;