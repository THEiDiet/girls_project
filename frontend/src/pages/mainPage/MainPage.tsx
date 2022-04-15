import React, { FC, useCallback, useState } from 'react'

import { useDispatch } from 'react-redux'

import { SearchField } from '../../components/common/searchField/SearchField'
import { useAppSelector } from '../../hooks'
import {filterPacks} from "../../store/reducers/packReducer";

export const MainPage: FC = () => {
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
      <div>Packs</div>
      <SearchField
        value=''
        onChangeWithDebounce={onChangeDebounceRequest}
        placeholder={"Enter pack's title for search"}
      />
      <div>{packs.map(p => p.name)}</div>

    </div>
  )
}
