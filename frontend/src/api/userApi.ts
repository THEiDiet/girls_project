import { AxiosError } from 'axios'

import { instance } from 'api/config'
import { Responses } from 'enums'
import { AuthT } from 'types'

export const userApi = {
  register: async (body: Omit<AuthT, 'rememberMe'>) => {
    try {
      const res = await instance.post('auth/register', body)
      if (res.status === Responses.Created) {
        return res.data
      }
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error || 'some error'
    }
  },
  login: async (body: any) => {
    try {
      const res = await instance.post('auth/login', body)
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
  me: async () => {
    try {
      const res = await instance.post('auth/me', {})
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
  update: (body: any) => instance.put('auth/me', body),
  forgot: async (email: string) => {
    const body = {
      email,
      from: 'alex96kravets@gmail.com',
      message: `<div style='background-color: lime; padding: 15px'>password recovery link: 
                <a href='http://localhost:3000/#/set-new-password$token$'>link</a></div>`,
    }
    try {
      const res = await instance.post('auth/forgot', body)
      if (res.status === Responses.Success) {
        return res.data
      }
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
  logout: async () => {
    const res = await instance.delete('auth/me')
    console.log(res)
  },
}
