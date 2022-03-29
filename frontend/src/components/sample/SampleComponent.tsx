import React, { ReactElement } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks'
import { Sample } from 'styles'
import { UserType } from 'types'

export const SampleComponent = (): ReactElement => {
  const dispatch = useAppDispatch()
  const users: UserType[] = useAppSelector(state => state.test.users)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({ type: 'sagaAction' })
  }
  return (
    <Sample>
      <button type="button" onClick={onButtonClick}>
        getUsers
      </button>
      {users.length && users.map(user => <div key={user.id}>{user.name}</div>)}
    </Sample>
  )
}
