import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Table } from 'components/table/Table'
import { Paths } from 'enums'
import { useAppSelector } from 'hooks'
import { getPacksTC } from 'store/thunks/packsThunk'

export const MainPage: FC = () => {
  const isAuth = useAppSelector(state => state.app.isAuthorized)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPacksTC({}))
  }, [])

  if (!isAuth) {
    return <Navigate to={Paths.Login} />
  }
  return (
    <div>
      <Table />
    </div>
  )
}
