const API_KEY = '356b2832036b27a06f949b42c2d89747';
const baseUrl = `https://api.themoviedb.org/3/movie`;
const endpoints = {
    UPCOMING: `/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    TOP_RATED: `/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    POPULAR: `/popular?api_key=${API_KEY}&language=en-US&page=2`,
    NOW_PLAYING: `/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    GET_DETAILS: (movieId) =>
        `/${movieId}?api_key=356b2832036b27a06f949b42c2d89747&language=en-US`,
};

export async function getAll() {
    const response = await Promise.all([
        fetch(baseUrl + endpoints.UPCOMING).then((res) => res.json()),
        fetch(baseUrl + endpoints.TOP_RATED).then((res) => res.json()),
        fetch(baseUrl + endpoints.POPULAR).then((res) => res.json()),
        fetch(baseUrl + endpoints.NOW_PLAYING).then((res) => res.json()),
    ]);

    return response;
}
