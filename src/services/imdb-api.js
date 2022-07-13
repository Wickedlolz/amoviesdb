const url = 'https://imdb-api.com/en/API/InTheaters/k_4ku0jufy';

export async function getAll() {
    const response = await fetch(url);

    if (response.ok === false) {
        throw new Error(response.status);
    }

    const result = await response.json();

    return result.items.slice(0, 8);
}
