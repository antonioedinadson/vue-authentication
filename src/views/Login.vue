<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-4" @submit.prevent="submit">

                <h1 class="text-lg font-bold">LOGIN</h1>

                <input type="text" v-model="username" autocomplete="username" placeholder="username" required
                    class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                <input type="password" v-model="password" autocomplete="current-password" placeholder="************"
                    required
                    class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                <button type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    ENTRAR
                </button>

            </form>
        </div>
    </div>
</template>
  
<script lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authenticationStore } from '../stores/authentication';

export default {

    setup() {

        const auth = authenticationStore();
        const router = useRouter();

        const username = ref<string>('');
        const password = ref<string>('');

        const submit = async () => {

            try {

                // TRY LOGIN
                await auth.signin({
                    username: username.value,
                    password: password.value
                });

                // SUCCESS REDIRECT
                router.push('/');

            } catch (error: any) {

                // ERROR
                const { data } = error.response;
                console.log(data);
            }
        };

        return {
            username,
            password,
            submit
        }
    }
}

</script>