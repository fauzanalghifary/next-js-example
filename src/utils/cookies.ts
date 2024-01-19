import Cookies from 'universal-cookie'
import { TOKEN_KEY } from '@/utils/constant'

const cookies = new Cookies()

export function setTokenAndCookies(accessToken: string) {
  setStorageToken(accessToken)
  setCookieToken(accessToken)
}

export function setStorageToken(accessToken: string) {
  localStorage.setItem(TOKEN_KEY, accessToken)
}

export function setCookieToken(accessToken: string) {
  cookies.set(TOKEN_KEY, accessToken)
}