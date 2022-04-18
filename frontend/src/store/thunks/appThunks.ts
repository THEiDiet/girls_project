import { Dispatch } from '@reduxjs/toolkit'

import { setUserData } from '../reducers'
import { logOutAC } from '../reducers/userReducer'

import { userApi } from 'api'
import { RootState } from 'store/config'
import { authorize, initialize } from 'store/reducers/appReducer'
import { UserInfoT } from 'types'

const min = (state: RootState): number => state.packs.rangeValues.minCardsCount
const max = (state: RootState): number => state.packs.rangeValues.maxCardsCount
const userId = (state: RootState): string => state.user.userInfo.userId

export const initialization = () => (dispatch: Dispatch) => {
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
export const logOutTC = () => (dispatch: Dispatch) => {
  userApi.logout().then(() => {
    dispatch(authorize(false))
    dispatch(logOutAC())
  })
}
