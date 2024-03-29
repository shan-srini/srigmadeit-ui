import requests from '../requests.js'
import routes, { srigmadeitBaseURL } from '../routes.js'

const api = routes.services.srigmadeit;

const srigmadeitAPI = {
    createEvent: createEvent,
    getEvents: getEvents,
    getEventMeta: getEventMeta,
    createCategory: createCategory,
    getCategories: getCategories,
    getMedia: getMedia,
    getVideos: getVideos,
    createMedia: createMedia,
    deleteMedia: deleteMedia,
    login: login
}
export default srigmadeitAPI;

export const dataSources = {
    photosCOS: 'b2', // Backblaze B2
    ORACLE: 'oracle', // Oracle COS for videos
    // GD: 'gd',
    // DM: 'dm' // dailymotion videos
}

export const checkHealthy = () => {
    requests.get(srigmadeitBaseURL)
        .then((res) => {
            // console.log('healthy');
        })
        .catch((err) => {
            console.error('API down');
            window.location.href = routes.down;
        })
}

/**
 * Creates an event and returns the saved id to upload profile photo for event
 * @param {String} eventName 
 * @param {int} timestamp 
 */
function createEvent(eventName, timestamp) {
    const endpoint = api.events;
    return requests.post(endpoint, {
        event: eventName,
        timestamp: new Date(timestamp).valueOf() / 1000 // converts date string to epoch timestamp by seconds for API
    }, { withCredentials: true })
        .then((response) => {
            return response.data.event_id;
        })
        .catch((error) => { console.log(error); throw "Create event error"; })
}

// get all events (returns object with events and total count)
function getEvents(page = 0, size = 25, searchName) {
    const endpoint = new URL(api.events);
    if (searchName) {
        endpoint.searchParams.append('name', searchName);
    }
    endpoint.searchParams.append('page', page)
    endpoint.searchParams.append('size', size)
    return requests.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => { console.log(error); return []; })
}

// get event info (eventMeta & categories)
function getEventMeta(eventId) {
    const endpoint = api.eventMeta(eventId)
    return requests.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            if (error.response.status === 404) {
                window.location.href = routes.notFound
            }
        })
}

// create category for an event
function createCategory(eventId, categoryName, order) {
    const endpoint = api.categories(eventId);
    return requests.post(endpoint, {
        name: categoryName,
        order: Number(order)
    }, { withCredentials: true })
        .then((response) => {
            return response.data;
        })
        .catch((error) => { throw error });
}

// get all categories for an event
function getCategories(eventId) {
    const endpoint = api.categories(eventId);
    return requests.get(endpoint)
        .then((response) => {
            return response.data.categories
        })
        .catch((error) => { console.log(error); return []; })
}

/**
 * Uploads media to srigmadeitAPI, returns array of created ids housed
 * within the given event and category names.
 * @param {String} eventId
 * @param {String} categoryId
 * @param {String} 
 * @param {int} count 
 */
function createMedia(eventId, categoryId, source = dataSources.photosCOS, count = 1, date = false) {
    const endpoint = api.media(eventId, categoryId);
    const postBody = {
        source: source,
        count: count
    }
    if (date) postBody.date = date
    return requests.post(endpoint, postBody,
        { withCredentials: true })
        .then((response) => {
            return response.data.media_ids;
        })
        .catch((error) => { console.log(error); return false; })
}

// get all media for a category
function getMedia(categoryId, page = 0, size = 25) {
    const endpoint = new URL(api.getMedia);
    endpoint.searchParams.append('categoryId', categoryId);
    endpoint.searchParams.append('page', page);
    endpoint.searchParams.append('size', size);
    return requests.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error))
}

function getVideos(page = 0, size = 25) {
    const endpoint = new URL(api.getMedia);
    endpoint.searchParams.append('eventId', 'SRIGMADEIT_VIDEOS');
    endpoint.searchParams.append('reverse', true);
    endpoint.searchParams.append('page', page);
    endpoint.searchParams.append('size', size);
    return requests.get(endpoint)
        .then((response) => {
            const modMeta = response.data.media_ids;
            for (let ii = 0; ii < modMeta.length; ii++) {
                 const videoNameAttrs = decodeURIComponent(modMeta[ii].category).split(";;;");
                 modMeta[ii].name = videoNameAttrs[0];
                 modMeta[ii].date = videoNameAttrs[1];
            }
            return response.data;
        })
}

// helper for getting urls from meta info of media/event
export function mediaMetaToURL(mediaMeta) {
    if (mediaMeta.source && mediaMeta._id) {
        if (mediaMeta.source === dataSources.photosCOS) {
            return routes.dataSources.photosCOS + mediaMeta._id;
        } else if (mediaMeta.source === dataSources.ORACLE) {
            return routes.dataSources.videosCOS + mediaMeta._id;
        }
        // else if (mediaMeta.source === dataSources.DM) {
        //     return routes.dataSources.DM + mediaMeta._id;
        // }
        // else if (mediaMeta.source === dataSources.GD) {
        //     let url = new URL(routes.dataSources.GD);
        //     url.searchParams.append('id', mediaMeta._id);
        //     return url.href;
        // }
    } else if (!mediaMeta.source && mediaMeta._id) {
        // give photos a shot, otherwise this is corrupt data...?
        // todo: mediaMeta should have had type all along! >:( :(
        return routes.dataSources.photosCOS + mediaMeta._id;
    }
}

/**
 * Login to API to receive jwt for API actions and ibm COS secrets
 * @param {*} username 
 * @param {*} password 
 */
function login(username, password) {
    const endpoint = api.login;
    return requests.post(endpoint, {
        username: username,
        password: password
    }, { withCredentials: true })
        .then((response) => {
            return response.data;
        })
        .catch((error) => { console.log(error); return false; })
}

// delete photo
function deleteMedia(deleteId) {
    const endpoint = api.getMedia + '/' + deleteId;
    return requests.delete(endpoint, { withCredentials: true })
        .then((response) => {
            return response.data;
        })
        .catch((error) => { console.log(error); return false; })
}
