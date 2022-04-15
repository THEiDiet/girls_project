import { Dispatch } from '@reduxjs/toolkit'

import { getCardsTC } from './cardsThunk'

import { userApi } from 'api'
import { authLogout, authorize, initialize } from 'store/reducers/appReducer'
import { logOutAC, setUserData } from 'store/reducers/userReducer'
import { UserInfoT } from 'types'

export const initialization = () => (dispatch: Dispatch) => {
  userApi.me().then((res: UserInfoT | string) => {
    dispatch(initialize(true))
    if (typeof res === 'string') {
      dispatch(authorize(false))
    } else {
      dispatch(authorize(true))
      dispatch(setUserData(res))
      // @ts-ignore
      dispatch(getCardsTC())
    }
  })
}
export const logOutTC = () => (dispatch: Dispatch) => {
  userApi.logout().then(res => {
    dispatch(authLogout(false))
    dispatch(logOutAC())
  })
}
