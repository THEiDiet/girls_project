import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  users: [],
  login: '',
}
const testSlice = createSlice({
  name: 'testReducer',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.counter += action.payload
    },
    subst: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.counter -= action.payload
    },
    getUsers: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.users = action.payload.users
    },
    login: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.login = action.payload
    },
  },
})
export const { add, subst, getUsers, login } = testSlice.actions
export const testReducer = testSlice.reducer
