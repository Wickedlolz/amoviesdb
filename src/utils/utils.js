export function setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function removeUserData() {
    localStorage.removeItem('user');
}
