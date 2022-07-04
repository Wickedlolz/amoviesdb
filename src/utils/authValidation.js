const EMAIL_PATTERN = /^[A-Za-z0-9]{2,}@[a-z]+\.[a-z]{2,3}$/;
const USERNAME_PATTERN = /^[A-Za-z0-9]{3,}$/;

export const isValidEmail = (email) => {
    if (EMAIL_PATTERN.test(email)) {
        return null;
    } else {
        return 'Invalid email. Email format must be (example@yahoo.com)';
    }
};

export const isValidUsername = (username) => {
    if (USERNAME_PATTERN.test(username)) {
        return null;
    } else {
        return 'Username must contains only letters and digits and must be at least 3 characters long.';
    }
};
