import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { Pagination } from 'components/pagination/Pagination'
import { useAppSelector } from 'hooks'
import { setCurrentPageAC } from 'store/reducers/packsReducer'
import { getPacksTC } from 'store/thunks/packsThunk'

export const CardList: FC = () => {
  const pageCount = useAppSelector(state => state.packs.pageCount)
  const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)

  const dispatch = useDispatch()

  const handlePageChange = (value: number): void => {
    dispatch(getPacksTC({ page: value }))
  }

  useEffect(() => {
    dispatch(getPacksTC({}))
  }, [])
  return (
    <div>
      <Pagination
        pageCount={pageCount}
        cardPacksTotalCount={cardPacksTotalCount}
        setCurrentPage={handlePageChange}
      />
    </div>
  )
}
