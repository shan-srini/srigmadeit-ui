import axios from 'axios';
import routes from './routes'

const requests = axios.create({
    // configs
});

// responses from api should always contain 'success' boolean key, reject promise if this is false
requests.interceptors.response.use(function (response) {
    if (response.data.hasOwnProperty('success') && !response.data['success']) {
        throw "success: FALSE"
    } else {
        return response;
    }
}, function (error) {
    if (error.response.status === 401) {
        window.alert("Unauthorized")
        window.location.href = routes.upload
    }
    if (error.response.status === 404) {
        window.location.href = routes.notFound
    }
    throw error.response.data.log ? error.response.data.log : error.response.data;
})

// headers and options
requests.defaults.headers.post['Content-Type'] = 'application/json';
requests.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// requests.defaults.withCredentials = true;

export default requests;