import { getUserData } from '../utils/utils';

const host = 'http://localhost:3030/api';

async function request(method, url, data, imageUpload = false) {
    const options = {
        method,
        headers: {},
    };

    if (data != undefined) {
        if (imageUpload) {
            options.body = data;
        } else {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }
    }

    const user = getUserData();
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok == false) {
            if (response.status == 403) {
                localStorage.removeItem('user');
            }

            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 400) {
            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (error) {
        throw error;
    }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export { get, post, put, del };
