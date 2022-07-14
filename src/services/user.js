import * as request from './api';

const endpoints = {
    SIGNIN: '/users/login',
    REGISTER: '/users/register',
    SIGN_OUT: '/users/logout',
    GET_USER: (userId) => `/users/${userId}`,
    SET_USER: (userId) => `/users/${userId}`,
};

export async function signIn(email, password) {
    return await request.post(endpoints.SIGNIN, { email, password });
}

export async function signUp(userData) {
    return await request.post(endpoints.REGISTER, userData);
}

export async function signOut() {
    return await request.get(endpoints.SIGN_OUT);
}

export async function getById(userId) {
    return await request.get(endpoints.GET_USER(userId));
}

export async function updateById(userId, userData) {
    return await request.put(endpoints.SET_USER(userId), userData, true);
}
