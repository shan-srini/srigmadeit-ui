import requests from '../requests.js'
import routes from '../routes.js'

const api = routes.services.srigmadeit;

const srigmadeitAPI = {
    createEvent: createEvent,
    getEvents: getEvents,
    createCategory: createCategory,
    getCategories: getCategories,
    getMedia: getMedia,
    createMedia: createMedia,
    login: login
}
export default srigmadeitAPI;

/**
 * Creates an event and returns the saved id to upload profile photo for event
 * @param {String} eventName 
 * @param {int} timestamp 
 */
function createEvent(eventName, timestamp) {
    const endpoint = api.events;
    return requests.post(endpoint, {
        event: eventName,
        timestamp: parseInt(timestamp)
    })
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

// create category for an event
function createCategory(eventName, categoryName, priority) {
    const endpoint = api.categories(eventName);
    return requests.post({
        category: categoryName,
        priority: priority
    })
        .then((response) => {

        })
        .catch((error) => console.log(error));
}

// get all categories for an event
function getCategories(eventName) {
    const endpoint = api.categories(eventName);
    return requests.get(endpoint)
        .then((response) => {
            return response.data.categories
        })
        .catch((error) => { console.log(error); return []; })
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
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => { console.log(error); return false; })
}

// upload media, can upload many, returns array of uploaded ids
/**
 * Uploads media to srigmadeitAPI, returns array of created ids housed
 * within the given event and category names.
 * @param {String} eventName 
 * @param {String} categoryName 
 * @param {int} count 
 */
function createMedia(eventName, categoryName, count = 1) {
    const endpoint = api.media(eventName, categoryName);
    return requests.post(endpoint, {
        count: count
    })
        .then((response) => {
            return response.data.media_ids;
        })
        .catch((error) => { console.log(error); return false; })
}

// delete photo