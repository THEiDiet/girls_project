import React, { FC } from 'react'

import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks/useAppDispatchAndSelector'
import { loginT } from '../../store/thunks/userThunks/userThunks'

export const Login: FC = () => {
  const dispatch = useDispatch()
  const login = useAppSelector(state => state.test.login)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    dispatch(loginT({ name: 'Alex', password: '123' }))
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Get test string
      </button>
      {login && <span>{login}</span>}
    </div>
  )
}
