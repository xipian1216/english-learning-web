import type { UserData, UserPayload } from '../schemas/auth';
import type { APIResponse } from '../schemas/common';

export async function register(email: string, password: string, displayName: string | null = null): Promise<UserPayload | null> {
    const response = await fetch('/api/users', {
        method: 'POST',
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
    const response = await fetch('/api/sessions', {
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
    const response = await fetch('/api/users/me', {
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
    const response = await fetch('/api/users/me/password', {
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