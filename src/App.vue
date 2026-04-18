<script setup lang="ts">

import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import ResetPassword from './views/ResetPassword.vue';

</script>

<template>
    <div id="app">
       <RouterView />
    </div>
</template>

<style scoped>

#app {
    background-color: #f0f0f0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
