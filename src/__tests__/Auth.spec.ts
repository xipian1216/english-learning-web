import { describe, it, expect } from 'vitest'
import { register } from '@/api/auth'

describe('Auth', () => {
  it('register', async () => {
    const response = await register('test@example.com', 'password', 'password');
    expect(response).toHaveProperty(['access_token', 'token_type', 'expires_in']);
  })
})
