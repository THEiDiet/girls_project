import { AxiosError } from 'axios'

import { instance } from './config'

export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginAPI = {
  // eslint-disable-next-line no-return-await
  ping: async () => await instance.get('ping'),
  // eslint-disable-next-line no-return-await
  login: async (body: any) => await instance.post('auth/login', JSON.stringify(body)),
  login: async (body: any) => {
    try {
      const res = await instance.post('auth/login', JSON.stringify(body))
      return res.data
    } catch (e) {
      return (e as AxiosError)?.response?.data?.error
    }
  },
}

// import { AxiosError } from 'axios'
//
// import { instance } from 'api/config'
// import { Responses } from 'enums/Responses'
// import { AuthT } from 'types/UserType' //LoginType
//
// export const userApi = {
//   // eslint-disable-next-line no-return-await
//   ping: async () => await instance.get('ping'),
//   register: async (body: any) =>
//       // eslint-disable-next-line no-return-await
//       await instance.post('auth/register', JSON.stringify(body)),
//   register: async (body: Omit<AuthT, 'rememberMe'>) => {
//     try {
//       const res = await instance.post('auth/register', JSON.stringify(body))
//       if (res.status === Responses.Created) {
//         return res.data
//       }
//       return res.data
//     } catch (e) {
//       return (e as AxiosError)?.response?.data?.error || 'some error'
//     }
//   },
//   // eslint-disable-next-line no-return-await
//   login: async (body: any) => await instance.post('auth/login', JSON.stringify(body)),
//   login: async (body: any) => {
//     try {
//       const res = await instance.post('auth/login', JSON.stringify(body))
//       return res.data
//     } catch (e) {
//       return (e as AxiosError)?.response?.data?.error
//     }
//   },
//   // eslint-disable-next-line no-return-await
//   me: async () => await instance.post('auth/me', JSON.stringify({})),
//   // eslint-disable-next-line no-return-await
//   update: async (body: any) => await instance.put('auth/me', JSON.stringify(body)),
//   forgot: async (email: string) => {
//     const body = {
//       email,
//       from: 'alex96kravets@gmail.com',
//       message: `<div style='background-color: lime; padding: 15px'>password recovery link:
//                 <a href='http://localhost:3000/#/set-new-password$token$'>link</a></div>`,
//     }
//     try {
//       const res = await instance.post('auth/forgot', JSON.stringify(body))
//       if (res.status === Responses.Success) {
//         return res.data
//       }
//       return res.data
//     } catch (e) {
//       return (e as AxiosError)?.response?.data?.error
//     }
//   },
// }
