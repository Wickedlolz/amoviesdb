import * as request from './api';

const endpoints = {
    ALL_MOVIES: '/catalog',
    MOVIE_BY_ID: (movieId) => `/catalog/${movieId}`,
    CREATE: '/catalog',
    DELETE_MOVIE: (movieId) => `/catalog/${movieId}`,
    EDIT_MOVIE: (movieId) => `/catalog/${movieId}`,
};

export async function getAll() {
    return await request.get(endpoints.ALL_MOVIES);
}

export async function getById(movieId) {
    return await request.get(endpoints.MOVIE_BY_ID(movieId));
}
