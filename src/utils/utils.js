export function setUserData(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('user'));
}
