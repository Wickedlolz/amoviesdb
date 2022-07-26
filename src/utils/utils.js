export function setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function removeUserData() {
    localStorage.removeItem('user');
}

export const truncateString = (string, number) => {
    if (string?.length > number) {
        return string.slice(0, number) + '...';
    } else {
        return string;
    }
};
