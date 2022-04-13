import { AppDispatch } from '../config'

import { userApi } from 'api'
import { authLogout, authorize, initialize } from 'store/reducers/appReducer'
import {getCardsAC, logOutAC, setUserData} from 'store/reducers/userReducer'
import { UserInfoT } from 'types'

export const initialization = () => (dispatch: AppDispatch) => {
  userApi.me().then((res: UserInfoT | string) => {
    dispatch(initialize(true))
    if (typeof res === 'string') {
      dispatch(authorize(false))
    } else {
      dispatch(authorize(true))
      dispatch(setUserData(res))
    }
  })
}
export const logOutTC = () => (dispatch: AppDispatch) => {
  userApi.logout().then(res => {
    dispatch(authLogout(false))
    dispatch(logOutAC())
  })
}

export const getCardsTC = () => (dispatch: AppDispatch) => {
  userApi.getCards().then(res => {
    dispatch(getCardsAC(res.data))
  })
}
