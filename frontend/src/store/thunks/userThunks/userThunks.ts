import { Dispatch } from '@reduxjs/toolkit'

// import { login } from 'store/reducers/userReducer'

type LoginT = {
  email: string
  password: string
}

export const loginT =
  ({ email, password }: LoginT) =>
  (dispatch: Dispatch) => {
    console.log(email, password)
  }
