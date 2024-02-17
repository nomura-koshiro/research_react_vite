import Cookies from 'js-cookie'

const cookiePrefix = 'login_'

const cookie = {
  getToken: (): JSON => {
    return JSON.parse(Cookies.get(`${cookiePrefix}token`) as string) as JSON
  },
  setToken: (token: string): void => {
    Cookies.set(`${cookiePrefix}token`, JSON.stringify(token))
  },
  clearToken: (): void => {
    Cookies.remove(`${cookiePrefix}token`)
  },
}

export default cookie
