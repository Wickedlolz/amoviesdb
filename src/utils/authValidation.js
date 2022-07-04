const EMAIL_PATTERN = /^[A-Za-z0-9]{3,}@[a-z]{3,}\.[a-z]{2}$/;

export const isValidEmail = (email) => {
    return EMAIL_PATTERN.test(email);
};
