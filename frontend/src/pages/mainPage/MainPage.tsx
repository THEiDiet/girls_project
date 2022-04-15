import React, { FC, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { SearchField } from 'components/common/searchField/SearchField'
import { Table } from 'components/table/Table'
import { Paths } from 'enums'
import { useAppSelector } from 'hooks'

export const MainPage: FC = () => {
  const navigate = useNavigate()
  const isAuth = useAppSelector(state => state.app.isAuthorized)
  useEffect(() => {
    if (!isAuth) {
      navigate(Paths.Login)
    }
  }, [isAuth])
  return (
    <div>
      <Table />
      <SearchField value="a" onChangeWithDebounce={() => console.log('a')} />
    </div>
  )
}
