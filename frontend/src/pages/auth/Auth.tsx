import React, { FC } from 'react'

import { userApi } from '../../api'

export const Auth: FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const authOnClick = async () => {
    const res = await userApi.register({
      email: 'log@mail.ru',
      password: '123456789',
    })
    console.log(res)
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const loginOnClick = async () => {
    const res = await userApi.login({
      email: 'log@mail.ru',
      password: '123456789',
      rememberMe: true,
    })
    console.log(res)
  }
  return (
    <div>
      <button type="button" onClick={authOnClick}>
        auth
      </button>
      <button type="button" onClick={loginOnClick}>
        log in
      </button>
    </div>
  )
}
