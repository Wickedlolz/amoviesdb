import * as request from './api';

const endpoints = {
    SIGNIN: '/users/login',
    REGISTER: '/users/register',
    LOGOUT: '/users/logout',
    GET_USER: (userId) => `/users/${userId}`,
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

export async function getById(userId) {
    return await request.get(endpoints.GET_USER(userId));
}
