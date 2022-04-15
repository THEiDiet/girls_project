import { Dispatch } from '@reduxjs/toolkit'

import { userApi } from 'api'
import { authorize } from 'store/reducers'

export const loginThunk = (data: any) => (dispatch: Dispatch) => {
  userApi.login(data).then(() => {
    dispatch(authorize(true))
  })
}
