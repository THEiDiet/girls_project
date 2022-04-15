import { Dispatch } from '@reduxjs/toolkit'

import { userApi } from '../../../api'
import {authorize} from "../../reducers";

type LoginT = {
  email: string
  password?: string
}

export const loginThunk = (data: any) => (dispatch: Dispatch) => {
  userApi.login(data).then(res => {
    dispatch(authorize(res.name))
  })
}
