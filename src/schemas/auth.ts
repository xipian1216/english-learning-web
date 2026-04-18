export interface UserData {
    id: string;
    email: string;
    display_name: string | null;
    status: string | null;
    created_at: Date | null;
    english_level: string | null;
    learning_goal: string | null;
    preferred_explanation_language: string | null;
}

export interface UserPayload {
    user_data: UserData;
    access_token: string;
    token_type: string;
    expires_in: number;
}