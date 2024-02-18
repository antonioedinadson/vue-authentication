<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <div class="w-[60%] border rounded p-4">
            <h1 class="font-bold border-b pb-2">HOME</h1>
            <div class="py-4">
                {{ auth }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { authenticationStore } from '../stores/authentication';

export default {

    setup() {

        const auth = authenticationStore();

        return {
            auth
        }

    }
}
</script>