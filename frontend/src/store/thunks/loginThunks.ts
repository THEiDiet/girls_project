import { Dispatch } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { userApi } from 'api'
import { authorize, setUserData } from 'store/reducers'
// TODO: fix any
export const loginThunk = (data: any) => async (dispatch: Dispatch) => {
  try {
    const res = await userApi.login(data)
    dispatch(authorize(true))
    dispatch(setUserData(res))
  } catch (e) {
    console.log((e as AxiosError)?.response?.data)
  }
}
