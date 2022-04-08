// export type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
// export type InferActionsType<T extends { [key: string]: (...arg: any[]) => any }> =
//   ReturnType<PropertiesType<T>>
// export type LoginActionsType = InferActionsType<typeof LoginActions>
// export type LoginParamsType = {
//   email: string
//   password: string
//   rememberMe: string
// }
//
// export const LoginActions = {
//   setLoading: (loading: boolean) =>
//     ({
//       type: 'login/SET_LOADING',
//       loading,
//     } as const),
//   setSuccess: (success: boolean) =>
//     ({
//       type: 'login/SET_SUCCESS',
//       success,
//     } as const),
//   setError: (error: string) =>
//     ({
//       type: 'login/SET_ERROR',
//       error,
//     } as const),
// }
//
// export type LoginStateType = {
//   loading: boolean
//   success: boolean
//   error: string
// }
//
// export const loginInitState: LoginStateType = {
//   loading: false,
//   success: false,
//   error: '',
// }
//
// export const loginReducer = (
//   state = loginInitState,
//   action: LoginActionsType,
// ): LoginStateType => {
//   switch (action.type) {
//     case 'login/SET_ERROR': {
//       return {
//         ...state,
//         error: action.error,
//         loading: false,
//         success: false,
//       }
//     }
//     case 'login/SET_LOADING': {
//       return {
//         ...state,
//         error: '',
//         loading: action.loading,
//         success: false,
//       }
//     }
//     case 'login/SET_SUCCESS': {
//       return {
//         ...state,
//         error: '',
//         loading: false,
//         success: action.success,
//       }
//     }
//
//     default: {
//       return state
//     }
//   }
// }
