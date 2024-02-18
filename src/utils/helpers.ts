import cookie from 'js-cookie';
import { IUser } from '../interfaces/IUser';

export const getTokenCookie = (): string | null => {

    const token = cookie.get('access_token');

    if (!token) {
        return null;
    }

    return token;
};

export const getUserCookie = (): IUser | null => {

    const user = cookie.get('user');

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}