const API_KEY = '356b2832036b27a06f949b42c2d89747';
const baseUrl = `https://api.themoviedb.org/3/movie`;
export const endpoints = {
    UPCOMING: `/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    TOP_RATED: `/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    POPULAR: `/popular?api_key=${API_KEY}&language=en-US&page=2`,
    NOW_PLAYING: `/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    GET_DETAILS: (movieId) =>
        `/${movieId}?api_key=356b2832036b27a06f949b42c2d89747&language=en-US`,
};

export async function request(url) {
    const response = await fetch(baseUrl + url);

    if (response.ok === false) {
        throw new Error(response.statusText);
    }

    const result = await response.json();

    return result.results;
}
