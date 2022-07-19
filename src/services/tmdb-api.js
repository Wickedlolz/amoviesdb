const API_KEY = '356b2832036b27a06f949b42c2d89747';
const baseUrl = `https://api.themoviedb.org/3/movie`;

export const endpoints = {
    UPCOMING: `/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    TOP_RATED: `/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
    POPULAR: `/popular?api_key=${API_KEY}&language=en-US&page=2`,
    NOW_PLAYING: `/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    GET_DETAILS_BY_ID: (movieId) =>
        `/${movieId}?api_key=${API_KEY}&language=en-US`,
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
    return await request(endpoints.GET_DETAILS_BY_ID(movieId));
}
