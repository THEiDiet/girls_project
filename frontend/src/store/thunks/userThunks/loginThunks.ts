import { Dispatch } from '@reduxjs/toolkit'

import { userApi } from '../../../api'

type LoginT = {
  email: string
  password?: string
}

export const loginThunk = (data: any) => (dispatch: Dispatch) => {
  userApi.login(data).then(res => {
    // dispatch(setUserData(res.name))
  })
}
