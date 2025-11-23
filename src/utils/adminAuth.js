// Admin authentication utility
export const ADMIN_EMAIL = 'immanueldavidckp@gmail.com';

export const isAdmin = (user) => {
    if (!user || !user.email) return false;
    return user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
};
