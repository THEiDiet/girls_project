import { Dispatch } from '@reduxjs/toolkit'

import { userApi } from '../../../api'
import { setUserData } from '../../reducers/profileReducer'

type LoginT = {
  email: string
  password?: string
}

export const loginThunk = (data: any) => (dispatch: Dispatch) => {
  debugger
  userApi.login(data).then(res => {
    debugger
    dispatch(setUserData(res.name))
  })
}
