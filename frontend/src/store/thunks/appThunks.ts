import { AppDispatch } from '../config'
import { setUserData } from '../reducers'
import { logOutAC } from '../reducers/userReducer'

import { userApi } from 'api'
import { authLogout, authorize, initialize } from 'store/reducers/appReducer'
import { getCardsAC } from 'store/reducers/packReducer'
import { UserInfoT } from 'types'

export const getCardsTC = () => (dispatch: AppDispatch) => {
  userApi.getCards().then(res => {
    dispatch(getCardsAC(res.data))
  })
}
export const initialization = () => (dispatch: AppDispatch) => {
  userApi.me().then((res: UserInfoT | string) => {
    dispatch(initialize(true))
    if (typeof res === 'string') {
      dispatch(authorize(false))
    } else {
      dispatch(authorize(true))
      dispatch(setUserData(res))
      dispatch(getCardsTC())
    }
  })
}
export const logOutTC = () => (dispatch: AppDispatch) => {
  userApi.logout().then(res => {
    dispatch(authLogout(false))
    dispatch(logOutAC())
  })
}
