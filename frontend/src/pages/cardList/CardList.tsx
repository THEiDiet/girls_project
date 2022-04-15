import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { Pagination } from 'components/pagination/Pagination'
import { useAppSelector } from 'hooks'
import { setCurrentPageAC } from 'store/reducers/packsReducer'
import { getCardsTC } from 'store/thunks/cardsThunk'

export const CardList: FC = () => {
  // const cards = useAppSelector(state => state.user.pack.cardPacks)
  const page = useAppSelector(state => state.packs.currentPage)
  const pageCount = useAppSelector(state => state.packs.pageCount)
  const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)

  const dispatch = useDispatch()

  const setCurrentPage = (value: number): void => {
    dispatch(setCurrentPageAC(value))
  }

  useEffect(() => {
    dispatch(getCardsTC())
  }, [])
  return (
    <div>
      <Pagination
        // page={page}
        pageCount={pageCount}
        cardPacksTotalCount={cardPacksTotalCount}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
