import type { UserData, UserPayload } from '../schemas/auth';
import type { APIResponse } from '../schemas/common';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function register(email: string, password: string, displayName: string | null = null): Promise<UserPayload | null> {
    const response = await fetch(`${BACKEND_URL}/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            display_name: displayName
        })
    });

    const data = await response.json() as APIResponse<UserPayload>;

    if (!response.ok) {
        const error = new Error(data.message || 'Request failed');
        (error as any).code = data.code;
        (error as any).status = response.status;
        throw error;
    }

    return data.data;
}

export async function login(email: string, password: string): Promise<UserPayload | null> {
    const response = await fetch(`${BACKEND_URL}/v1/sessions`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const data = await response.json() as APIResponse<UserPayload>;

    if (!response.ok) {
        const error = new Error(data.message || 'Request failed');
        (error as any).code = data.code;
        (error as any).status = response.status;
        throw error;
    }

    return data.data;
}

export async function getMe(token: string): Promise<UserData | null> {
    const response = await fetch(`${BACKEND_URL}/v1/users/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json() as APIResponse<UserData>;

    if (!response.ok) {
        const error = new Error(data.message || 'Request failed');
        (error as any).code = data.code;
        (error as any).status = response.status;
        throw error;
    }

    return data.data;
}

export async function updatePassword(token: string, oldPassword: string, newPassword: string): Promise<boolean> {
    const response = await fetch(`${BACKEND_URL}/v1/users/me/password`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword
        })
    });

    const data = await response.json() as APIResponse<null>;

    if (!response.ok) {
        const error = new Error(data.message || 'Request failed');
        (error as any).code = data.code;
        (error as any).status = response.status;
        throw error;
    }

    return true;
}

export async function sendResetPasswordCode(email: string): Promise<boolean> {
    void email;

    // TODO: 在这里补充发送重置密码验证码的 API 调用
    return true;
}

export async function resetPasswordByCode(email: string, code: string, password: string): Promise<boolean> {
    void email;
    void code;
    void password;

    // TODO: 在这里补充验证码重置密码的 API 调用
    return true;
}
