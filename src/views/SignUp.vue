<script setup lang="ts">

import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const authStore = useAuthStore();

const submit = () => {
    authStore.register(email.value, password.value, null);
};

</script>

<template>
    <div class="sign-up hero">
        <p class="eyebrow">Sign Up</p>
        <h2>English Learning</h2>
        <form @submit.prevent="submit" novalidate>
            <div class="field">
                <label for="email" class="sr-only">Email</label>
                <input type="email" id="email" name="email" v-model="email" required placeholder="Email" autocomplete="email" />
            </div>
            <div class="field">
                <label for="password" class="sr-only">Password</label>
                <input type="password" id="password" name="password" v-model="password" required placeholder="Password" autocomplete="new-password" />
            </div>
            <div class="field">
                <label for="confirm-password" class="sr-only">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirmPassword" v-model="confirmPassword" required placeholder="Confirm Password" autocomplete="new-password" />
            </div>
            <button type="submit" class="primary">Sign Up</button>
            <div class="links">
                <span>Already have an account?</span>
                <RouterLink to="/sign-in">Login</RouterLink>
            </div>
        </form>
    </div>
</template>

<style scoped>
.hero {
    padding: 20px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 18px 40px rgba(30, 48, 80, 0.12);
    backdrop-filter: blur(8px);
}

.eyebrow {
    margin: 0 0 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b4642a;
}

.sign-up {
    width: 320px;
    max-width: 92vw;
    color: #1e304f;
    margin: 24px auto;
}

h2 {
    margin: 0 0 18px;
    font-size: 22px;
    color: #102033;
}

.field {
    margin-bottom: 12px;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid rgba(30, 48, 80, 0.08);
    background: rgba(255, 255, 255, 0.6);
    box-shadow: inset 0 2px 6px rgba(16, 32, 51, 0.04);
    font-size: 14px;
    color: #102033;
    outline: none;
}

input::placeholder {
    color: rgba(16, 32, 51, 0.4);
}

.primary {
    display: block;
    width: 100%;
    padding: 10px 12px;
    margin: 10px 0 14px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg,#ff8a3d 0%,#db5c34 100%);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(180, 100, 42, 0.18);
}

.links {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.links a {
    color: #1e304f;
    text-decoration: none;
    font-size: 14px;
    text-align: left;
}

.links a:last-child {
    text-align: right;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
}

</style>

