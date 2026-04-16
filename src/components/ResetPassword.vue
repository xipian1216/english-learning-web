<script setup lang="ts">

import { ref } from 'vue';

const email = ref('');
const code = ref('');
const password = ref('');
const confirmPassword = ref('');

const sending = ref(false);
const cooldown = ref(0);
let timer: number | undefined;

function validateEmail(value: string) {
    // very simple email check
    return /\S+@\S+\.\S+/.test(value);
}

const sendCode = async () => {
    if (!email.value || !validateEmail(email.value)) {
        alert('请输入有效的邮箱地址');
        return;
    }
    if (cooldown.value > 0) return;

    sending.value = true;

    // simulate API call
    await new Promise((res) => setTimeout(res, 800));

    // start 60s cooldown
    cooldown.value = 60;
    sending.value = false;

    timer = window.setInterval(() => {
        cooldown.value -= 1;
        if (cooldown.value <= 0) {
            if (timer) {
                clearInterval(timer);
                timer = undefined;
            }
            cooldown.value = 0;
        }
    }, 1000) as unknown as number;
};

const submit = () => {
    if (!code.value) {
        alert('请输入验证码');
        return;
    }
    if (!password.value) {
        alert('请输入新密码');
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert('两次密码输入不一致');
        return;
    }

    // TODO: call reset password API
    console.log('reset password', { email: email.value, code: code.value, password: password.value });
    alert('密码已重置（模拟）');
};

</script>

<template>
    <div class="sign-up hero">
        <p class="eyebrow">Reset Password</p>
        <h2>English Learning</h2>
        <form @submit.prevent="submit" novalidate>
            <div class="field">
                <label for="email" class="sr-only">Email</label>
                <input type="email" id="email" v-model="email" required placeholder="Email" />
            </div>

            <div class="field code-row">
                <div class="code-input">
                    <label for="code" class="sr-only">Code</label>
                    <input type="text" id="code" v-model="code" required placeholder="Code" />
                </div>
                <button type="button" class="send-btn" @click="sendCode" :disabled="sending || cooldown > 0">
                    <span v-if="cooldown === 0">{{ sending ? 'Sending...' : 'Send Code' }}</span>
                    <span v-else>Resend in {{ cooldown }}s</span>
                </button>
            </div>

            <div class="field">
                <label for="password" class="sr-only">Password</label>
                <input type="password" id="password" v-model="password" required placeholder="Password" />
            </div>
            <div class="field">
                <label for="confirm-password" class="sr-only">Confirm Password</label>
                <input type="password" id="confirm-password" v-model="confirmPassword" required placeholder="Confirm Password" />
            </div>
            <button type="submit" class="primary">Reset Password</button>
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
input[type="password"],
input[type="text"] {
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

.code-row {
    display: flex;
    gap: 8px;
    align-items: center;
}

.code-input {
    flex: 1 1 auto;
}

.send-btn {
    flex: 0 0 120px;
    padding: 8px 10px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg,#ff8a3d 0%,#db5c34 100%);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(180, 100, 42, 0.14);
}

.send-btn[disabled] {
    opacity: 0.6;
    cursor: default;
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

