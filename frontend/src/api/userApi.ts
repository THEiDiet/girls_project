import { AxiosError } from 'axios'

import { instance } from 'api/config'
import { Responses } from 'enums'
import { AuthT } from 'types'

export const userApi = {
  // eslint-disable-next-line no-return-await
  ping: async () => await instance.get('ping'),
  register: async (body: Omit<AuthT, 'rememberMe'>) => {
    try {
      const res = await instance.post('auth/register', JSON.stringify(body))
      if (res.status === Responses.Created) {
        return res.data
      }
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error || 'some error'
    }
  },
  // eslint-disable-next-line no-return-await
  login: async (body: any) => {
    try {
      const res = await instance.post('auth/login', JSON.stringify(body))
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
  // eslint-disable-next-line no-return-await
  me: async () => {
    try {
      const res = await instance.post(await instance.post('auth/me', JSON.stringify({})))
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
  // eslint-disable-next-line no-return-await
  update: async (body: any) => await instance.put('auth/me', JSON.stringify(body)),
  forgot: async (email: string) => {
    const body = {
      email,
      from: 'alex96kravets@gmail.com',
      message: `<div style='background-color: lime; padding: 15px'>password recovery link: 
                <a href='http://localhost:3000/#/set-new-password$token$'>link</a></div>`,
    }
    try {
      const res = await instance.post('auth/forgot', JSON.stringify(body))
      if (res.status === Responses.Success) {
        return res.data
      }
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
}
