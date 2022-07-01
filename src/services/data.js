import * as request from './api';

const endpoints = {
    ALL_MOVIES: '/catalog',
    MOVIE_BY_ID: (movieId) => `/catalog/${movieId}`,
    CREATE: '/catalog',
    DELETE_MOVIE: (movieId) => `/catalog/${movieId}`,
    EDIT_MOVIE: (movieId) => `/catalog/${movieId}`,
    LIKE: (movieId) => `/catalog/like/${movieId}`,
    DISLIKE: (movieId) => `/catalog/dislike/${movieId}`,
    DELETE_BY_ID: (movieId) => `/catalog/${movieId}`,
    COMMENT: (movieId) => `/catalog/comments/${movieId}`,
};

export async function getAll() {
    return await request.get(endpoints.ALL_MOVIES);
}

export async function getById(movieId) {
    return await request.get(endpoints.MOVIE_BY_ID(movieId));
}

export async function create(movieData) {
    return await request.post(endpoints.CREATE, movieData);
}

export async function editById(movieId, movieData) {
    return await request.put(endpoints.EDIT_MOVIE(movieId), { movieData });
}

export async function like(movieId) {
    return await request.post(endpoints.LIKE(movieId));
}

export async function dislike(movieId) {
    return await request.post(endpoints.DISLIKE(movieId));
}

export async function deleteById(movieId) {
    return await request.del(endpoints.DELETE_BY_ID(movieId));
}

export async function comment(movieId, commentData) {
    return await request.post(endpoints.COMMENT(movieId), {
        content: commentData,
    });
}
