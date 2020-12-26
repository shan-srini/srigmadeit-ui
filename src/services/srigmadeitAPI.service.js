import requests from '../requests.js'
import routes from '../routes.js'

const api = routes.services.srigmadeit;

const srigmadeitAPI = {
    createEvent: createEvent,
    getEvents: getEvents,
    getEventMeta: getEventMeta,
    createCategory: createCategory,
    getCategories: getCategories,
    getMedia: getMedia,
    createMedia: createMedia,
    login: login
}
export default srigmadeitAPI;

export const dataSources = {
    COS: 'b2', // for now the only cloud object storage provider used. Backblaze B2
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

// get all events
function getEvents(page = 0, size = 25) {
    const endpoint = new URL(api.events);
    endpoint.searchParams.append('page', page)
    endpoint.searchParams.append('size', size)
    return requests.get(endpoint)
        .then((response) => {
            return response.data.events;
        })
        .catch((error) => { console.log(error); return []; })
}

// get event info (eventMeta & categories)
function getEventMeta(eventId) {
    const endpoint = new URL(api.eventMeta(eventId))
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
function createMedia(eventId, categoryId, source = dataSources.COS, count = 1) {
    const endpoint = api.media(eventId, categoryId);
    return requests.post(endpoint, {
        source: source,
        count: count
    }, { withCredentials: true })
        .then((response) => {
            return response.data.media_ids;
        })
        .catch((error) => { console.log(error); return false; })
}

// get all media for a category
function getMedia(categoryName, page = 0, size = 25) {
    const endpoint = new URL(api.media(eventName, categoryName));
    endpoint.searchParams.append('page', page);
    endpoint.searchParams.append('size', size);
    return requests.get(endpoint)
        .then((response) => {
            return response.data.media;
        })
        .catch((error) => console.log(error))
}

// helper for getting urls from meta info of media/event
export function mediaMetaToURL(mediaMeta) {
    if (mediaMeta.type && mediaMeta._id) {
        if (mediaMeta.type === "image/jpeg") {
            return routes.dataSources.cos + mediaMeta._id;
        }
        else if (mediaMeta.type === "video/youtube") {
            return routes.dataSources.cos + mediaMeta._id;
        }
    } else if (!mediaMeta.type && mediaMeta._id) {
        // give COS a shot, otherwise this is corrupt data...
        // eventMeta currently doesn't set mediaType, since it's always photo
        return routes.dataSources.cos + mediaMeta._id;
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