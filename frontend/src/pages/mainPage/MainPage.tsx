import React, { FC, useCallback, useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { SearchField } from 'components/common/searchField/SearchField'
import { Table } from 'components/table/Table'
import { Paths } from 'enums'
import { useAppSelector } from 'hooks'
import { filterPacks } from 'store/reducers/packReducer'

export const MainPage: FC = () => {
  const navigate = useNavigate()
  const isAuth = useAppSelector(state => state.app.isAuthorized)
  useEffect(() => {
    if (!isAuth) {
      navigate(Paths.Login)
    }
  }, [isAuth])
  const packs = useAppSelector(state => state.packs.actualPacks)
  const [valueInput, setValueInput] = useState('')
  const dispatch = useDispatch()

  const onChangeDebounceRequest = useCallback(
    (title: string) => {
      dispatch(filterPacks(title))
    },
    [dispatch],
  )

  return (
    <div>
      <SearchField
        value=""
        onChangeWithDebounce={onChangeDebounceRequest}
        placeholder={"Enter pack's title for search"}
      />
      <Table />
    </div>
  )
}
