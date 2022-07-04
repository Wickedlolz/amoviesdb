import * as request from './api';

const endpoints = {
    SIGNIN: '/users/login',
    REGISTER: '/users/register',
    LOGOUT: '/users/logout',
};

export async function signIn(email, password) {
    return await request.post(endpoints.SIGNIN, { email, password });
}

export async function signUp(userData) {
    return await request.post(endpoints.REGISTER, userData);
}

export async function logout() {
    return await request.get(endpoints.LOGOUT);
}
