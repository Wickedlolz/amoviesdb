import * as request from './api';

const endpoints = {
    ALL_MOVIES: '/catalog',
    MOST_LIKED_MOVIES: '/catalog/most-liked',
    MOVIE_BY_ID: (movieId) => `/catalog/${movieId}`,
    CREATE: '/catalog',
    DELETE_MOVIE: (movieId) => `/catalog/${movieId}`,
    EDIT_MOVIE: (movieId) => `/catalog/${movieId}`,
    LIKE: (movieId) => `/catalog/like/${movieId}`,
    DISLIKE: (movieId) => `/catalog/dislike/${movieId}`,
    DELETE_BY_ID: (movieId) => `/catalog/${movieId}`,
    COMMENT: (movieId) => `/catalog/comments/${movieId}`,
    MY_MOVIES: (userId) => `/catalog/my-movies/${userId}`,
};

export async function getAll(search, page) {
    let endpoint = endpoints.ALL_MOVIES;

    if (page) {
        endpoint += '?page=' + page;
    }

    if (search) {
        endpoint += page ? '&search=' + search : '?search=' + search;
    }

    return await request.get(endpoint);
}

export async function getMostLiked() {
    return await request.get(endpoints.MOST_LIKED_MOVIES);
}

export async function getMyMovies(userId) {
    return await request.get(endpoints.MY_MOVIES(userId));
}

export async function getById(movieId) {
    return await request.get(endpoints.MOVIE_BY_ID(movieId));
}

export async function create(movieData) {
    return await request.post(endpoints.CREATE, movieData);
}

export async function editById(movieId, movieData) {
    return await request.put(endpoints.EDIT_MOVIE(movieId), movieData);
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
