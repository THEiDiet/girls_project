import { AppDispatch } from '../config'

import { userApi } from 'api'
import { authorize, initialize } from 'store/reducers/appReducer'
import { setUserData } from 'store/reducers/userReducer'
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
