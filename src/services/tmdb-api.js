const API_KEY = '356b2832036b27a06f949b42c2d89747';
const baseUrl = `https://api.themoviedb.org/3`;

export const endpoints = {
    UPCOMING: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    TOP_RATED: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
    POPULAR: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    NOW_PLAYING: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    GET_DETAILS_BY_ID: (movieId) =>
        `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    GET_VIDEOS_BY_ID: (movieId) =>
        `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
    POPULAR_ACTORS: `/person/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

async function request(url) {
    const response = await fetch(baseUrl + url);

    if (response.ok === false) {
        throw new Error(response.status_message);
    }

    const result = await response.json();

    return result;
}

export async function getAll(url) {
    const response = await request(url);

    return response.results;
}

export async function getById(movieId) {
    return Promise.all([
        request(endpoints.GET_DETAILS_BY_ID(movieId)),
        request(endpoints.GET_VIDEOS_BY_ID(movieId)),
    ]);
}
