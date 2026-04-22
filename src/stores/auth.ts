import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  getMe,
  login,
  register,
  resetPasswordByCode,
  sendResetPasswordCode,
  updatePassword,
} from '@/api/auth'
import type { UserData, UserPayload } from '@/schemas/auth'

const AUTH_STORAGE_KEY = 'auth_state'

interface AuthSession {
  accessToken: string | null
  tokenType: string | null
  expiresIn: number | null
  user: UserData | null
}

const createEmptySession = (): AuthSession => ({
  accessToken: null,
  tokenType: null,
  expiresIn: null,
  user: null,
})

const readPersistedAuthState = (): AuthSession => {
  const fallbackState = createEmptySession()

  if (typeof window === 'undefined') {
    return fallbackState
  }

  const rawState = window.localStorage.getItem(AUTH_STORAGE_KEY)

  if (!rawState) {
    return fallbackState
  }

  try {
    const parsedState = JSON.parse(rawState) as Partial<AuthSession>

    return {
      accessToken: parsedState.accessToken ?? null,
      tokenType: parsedState.tokenType ?? null,
      expiresIn: parsedState.expiresIn ?? null,
      user: parsedState.user ?? null,
    }
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
    return fallbackState
  }
}

const writePersistedAuthState = (session: AuthSession) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
}

const clearPersistedAuthState = () => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(AUTH_STORAGE_KEY)
}

const createSessionFromPayload = (payload: UserPayload): AuthSession => ({
  accessToken: payload.access_token,
  tokenType: payload.token_type,
  expiresIn: payload.expires_in,
  user: payload.user_data,
})

export const useAuthStore = defineStore('auth', () => {
  const session = ref<AuthSession>(readPersistedAuthState())

  const accessToken = computed(() => session.value.accessToken)
  const tokenType = computed(() => session.value.tokenType)
  const expiresIn = computed(() => session.value.expiresIn)
  const user = computed(() => session.value.user)
  const isAuthenticated = computed(() => Boolean(session.value.accessToken))

  const setSession = (nextSession: AuthSession) => {
    session.value = nextSession
    writePersistedAuthState(nextSession)
  }

  const updateUser = (nextUser: UserData | null) => {
    session.value = {
      ...session.value,
      user: nextUser,
    }

    writePersistedAuthState(session.value)
  }

  const clearSession = () => {
    session.value = createEmptySession()
    clearPersistedAuthState()
  }

  const signUp = async (email: string, password: string, displayName: string | null = null) => {
    const payload = await register(email, password, displayName)

    if (payload) {
      setSession(createSessionFromPayload(payload))
    }
  }

  const signIn = async (email: string, password: string) => {
    const payload = await login(email, password)

    if (payload) {
      setSession(createSessionFromPayload(payload))
    }
  }

  const fetchCurrentUser = async () => {
    if (!session.value.accessToken) {
      return null
    }

    const currentUser = await getMe(session.value.accessToken)

    if (currentUser) {
      updateUser(currentUser)
    }

    return currentUser
  }

  const changePassword = async (oldPassword: string, newPassword: string) => {
    if (!session.value.accessToken) {
      throw new Error('Not authenticated')
    }

    return await updatePassword(session.value.accessToken, oldPassword, newPassword)
  }

  const requestPasswordResetCode = async (email: string) => {
    return await sendResetPasswordCode(email)
  }

  const resetPasswordWithCode = async (email: string, code: string, password: string) => {
    return await resetPasswordByCode(email, code, password)
  }

  const signOut = () => {
    clearSession()
  }

  return {
    session,
    accessToken,
    tokenType,
    expiresIn,
    user,
    isAuthenticated,
    signUp,
    signIn,
    fetchCurrentUser,
    changePassword,
    requestPasswordResetCode,
    resetPasswordWithCode,
    signOut,
  }
})
