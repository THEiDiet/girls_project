import { UserType } from '../types'

import { instance } from './config'

export type SignInDataType = UserType & { error: string }

export const LoginAPI = {
  signIn: async (email: string, password: string, rememberMe: boolean) => {
    const response = await instance.post<SignInDataType>('/login', {
      email,
      password,
      rememberMe,
    })

    return response.data
  },
}
