import { Dispatch } from '@reduxjs/toolkit'

import { userApi } from '../../../api'

import { login } from 'store/reducers/testReducer'

type LoginT = {
  email: string
  password: string
  rememberMe: boolean
}

export const loginT = (body: LoginT) => (dispatch: Dispatch) => {
  const res = userApi.login(body)
  console.log(res)
  dispatch(login('string'))
}
