export const srigmadeitBaseURL = process.env.NODE_ENV === 'development' ? 'http://192.168.1.202:5000' : 'https://api.srigmadeit.com'

const routes = {
    home: "/",
    events: '/events',
    photos: '/photos',
    videos: '/videos',
    contact: '/contact',
    upload: '/upload',
    notFound: '/404',
    down: '/down',
    services: {
        srigmadeit: {
            events: srigmadeitBaseURL + '/events',
            eventMeta: (eventId) => srigmadeitBaseURL + `/events/${eventId}`,
            categories: (eventId) => srigmadeitBaseURL + `/events/${eventId}/categories`,
            media: (eventId, categoryId) => srigmadeitBaseURL + `/events/${eventId}/categories/${categoryId}/media`,
            getMedia: srigmadeitBaseURL + `/media`,
            login: srigmadeitBaseURL + '/login'
        }
    },
    dataSources: {
        photosCOS: "https://photos.srigmadeit.com/file/srigmadeit/",
        GD: "https://drive.google.com/uc",
        DM: "https://www.dailymotion.com/embed/video/",
        videosCOS: "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idcgvw3idubd/b/srigmadeit/o/srigmadeit%2F",
    }
}

export default routes;