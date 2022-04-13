import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { Pagination } from 'components/pagination/Pagination'
import { useAppSelector } from 'hooks'
import { setCurrentPageAC } from 'store/reducers/userReducer'
import { getCardsTC } from 'store/thunks/appThunks'

export const CardList: FC = () => {
  // const cards = useAppSelector(state => state.user.pack.cardPacks)
  const page = useAppSelector(state => state.user.pack.page)
  const pageCount = useAppSelector(state => state.user.pack.pageCount)
  const cardPacksTotalCount = useAppSelector(state => state.user.pack.cardPacksTotalCount)

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardsTC())
  }, [])

  const setCurrentCards = (value: number): void => {
    dispatch(setCurrentPageAC(value))
  }

  const setCurrentPage = (value: number): void => {
    dispatch(setCurrentPageAC(value))
  }

  return (
    <div>
      <Pagination
        page={page}
        pageCount={pageCount}
        cardPacksTotalCount={cardPacksTotalCount}
        setCurrentCards={setCurrentCards}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
