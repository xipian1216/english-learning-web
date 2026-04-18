import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { register, login, getMe, updatePassword } from "@/api/auth";
import type { UserData } from "@/schemas/auth";

export const useAuthStore = defineStore("auth", () => {

    const curAccessToken = ref<string | null>(localStorage.getItem("access_token"));
    const curTokenType = ref<string | null>(localStorage.getItem("token_type"));
    const curExpiresIn = ref<number | null>(localStorage.getItem("expires_in") ? parseInt(localStorage.getItem("expires_in") as string) : null);
    const curUser = ref<UserData | null>(null);

    const getAccessToken = computed(() => curAccessToken.value);
    const getTokenType = computed(() => curTokenType.value);
    const getExpiresIn = computed(() => curExpiresIn.value);
    const getUser = computed(() => curUser.value);

    const setAuth = (accessToken: string, tokenType: string, expiresIn: number) => {
        curAccessToken.value = accessToken;
        curTokenType.value = tokenType;
        curExpiresIn.value = expiresIn
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("token_type", tokenType);
        localStorage.setItem("expires_in", expiresIn.toString());
    };

    const callRegister = async (email: string, password: string, displayName: string | null = null) => {
        const user = await register(email, password, displayName);
        if (user) {
            setAuth(user.access_token, user.token_type, user.expires_in);
        }
    };

    const callLogin = async (email: string, password: string) => {
        const user = await login(email, password);
        if (user) {
            setAuth(user.access_token, user.token_type, user.expires_in);
        }
    };

    const callGetMe = async () => {
        const user = await getMe(curAccessToken.value ?? '');
        if (user) {
            curUser.value = user;
        }
    };

    const callUpdatePassword = async (oldPassword: string, newPassword: string) => {
        const success = await updatePassword(curAccessToken.value ?? '', oldPassword, newPassword);
        return success;
    };

    const logout = async () => {
        curAccessToken.value = null;
        curTokenType.value = null;
        curExpiresIn.value = null;
        curUser.value = null;
        localStorage.removeItem("access_token");
        localStorage.removeItem("token_type");
        localStorage.removeItem("expires_in");
    };

    return {
        access_token: curAccessToken,
        token_type: curTokenType,
        expires_in: curExpiresIn,
        user: curUser,
        setAuth,
        register: callRegister,
        login: callLogin,
        getMe: callGetMe,
        updatePassword: callUpdatePassword,
        logout,
        getAccessToken,
        getTokenType,
        getExpiresIn,
        getUser
    };
});
