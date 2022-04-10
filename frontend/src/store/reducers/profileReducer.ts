import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  error: 'as string |undefined',
  authMe: false,
  isInitialized: true,
  isFetching: true,
  counter: 0,
}
const profileSlice = createSlice({
  name: 'profileReducer',
  initialState,
  reducers: {
    // add: (state, action: PayloadAction<number>) => {
    //   // eslint-disable-next-line no-param-reassign
    //   state.counter += action.payload
    // },
    setUserData: (state: any, action: PayloadAction<any>) => {
      debugger
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload
      console.log(action.payload)
    },
  },
})
export const {setUserData} = profileSlice.actions
export const profileReducer = profileSlice.reducer
