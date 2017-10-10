export interface AuthResponse {
  result?: {
    email?: string,
    uid?: string,
  },
  error?: {
    code?: string,
    message?: string
  }
}
