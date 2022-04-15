import { AxiosError } from 'axios'

import { instance } from './config'

export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginAPI = {
  login: async (body: any) => {
    try {
      const res = await instance.post('auth/login', JSON.stringify(body))
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
}
