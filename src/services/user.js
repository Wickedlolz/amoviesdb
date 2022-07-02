import * as request from './api';

const endpoints = {
    SIGNIN: '/users/login',
    REGISTER: '/users/register',
    LOGOUT: '/users/logout',
};

export async function signIn(email, password) {
    return await request.post(endpoints.SIGNIN, { email, password });
}
