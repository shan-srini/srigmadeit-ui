import axios from 'axios';

const requests = axios.create({
    // configs
});

// responses from api should always contain 'success' boolean key, reject promise if this is false
requests.interceptors.response.use(function (response) {
    if (response.data.hasOwnProperty('success') && !response.data['success']) {
        return Promise.reject(response);
    } else {
        return response;
    }
})

// headers and options
requests.defaults.headers.post['Content-Type'] = 'application/json';
requests.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
// requests.defaults.withCredentials = true;

export default requests;