import { defineStore } from 'pinia';
import { ref } from 'vue';
import cookie from 'js-cookie';

import http from '../utils/axios';

import { IUser } from '../interfaces/IUser';
import { ICredentials } from '../interfaces/ICredeentials';
import { getTokenCookie, getUserCookie } from '../utils/helpers';

export const authenticationStore = defineStore('authentication', () => {

    const user = ref<IUser | null>(getUserCookie());
    const token = ref<string | null>(getTokenCookie());

    const signin = async (credentials: ICredentials) => {

        // REQUEST LOGIN
        const { data } = await http.post("/auth/signin", credentials);

        // SET TOKEN
        cookie.set("access_token", data.data.token_access);

        // SET USER
        cookie.set('user', JSON.stringify({
            id: data.data.id,
            email: data.data.email,
            username: data.data.username
        }));
    };

    return {
        user,
        token,
        signin
    }
});