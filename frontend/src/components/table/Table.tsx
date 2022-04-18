import React, { FC, useCallback, useState } from 'react'

import { useDispatch } from 'react-redux'

import { Card } from 'components/card/Card'
import { Modal } from 'components/common/modal/Modal'
import { SearchField } from 'components/common/searchField/SearchField'
import { Pagination } from 'components/pagination/Pagination'
import TableCard from 'components/table/TableCard'
import { EHelpers } from 'enums'
import { useAppSelector } from 'hooks'
import { getOnePackTC, getPacksTC } from 'store/thunks/packsThunk'
import { TableCell, TableStyled } from 'styles'
import { TableHead } from 'styles/tableStyles/TableHead'

export const Table: FC = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const [sortTitle, setSortTitle] = useState('')
  const [oneZero, setOneZero] = useState(true)
  const packs = useAppSelector(state => state.packs.packs)
  const currentPage = useAppSelector(state => state.packs.currentPage)
  const portionSize = useAppSelector(state => state.packs.amountOfElementsToShow)
  const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)

  const sortByParam = (sortName: string): void => {
    if (sortName === sortTitle) {
      dispatch(
        getPacksTC({ sortPacks: `${Number(oneZero)}${sortName}`, page: currentPage }),
      )
      setOneZero(!oneZero)
    }
    if (sortName !== sortTitle) {
      dispatch(getPacksTC({ sortPacks: `${EHelpers.One}${sortName}`, page: currentPage }))
      setOneZero(false)
      setSortTitle(sortName)
    }
  }

  const handlePageChange = (value: number): void => {
    const obj = sortTitle
      ? { sortPacks: `${Number(!oneZero)}${sortTitle}`, page: value }
      : { page: value }
    dispatch(getPacksTC(obj))
  }

  const sortByName = (): void => {
    sortByParam('name')
  }
  const sortByUserName = (): void => {
    sortByParam('user_name')
  }
  const sortByDate = (): void => {
    sortByParam('updated')
  }
  const sortByCardsCount = (): void => {
    sortByParam('cardsCount')
  }

  const onChangeDebounceRequest = useCallback(
    (packName: string) => {
      dispatch(getPacksTC({ packName }))
    },
    [dispatch],
  )

  const onLearnClick = (cardsPackId: string): void => {
    dispatch(getOnePackTC({ cardsPackId }))
    setModalOpen(true)
  }
  const tableRows = packs.map(
    ({ user_name: userName, _id: id, name, updated, cardsCount }) => {
      const date = new Date(updated).toLocaleDateString()
      return (
        <TableCard
          key={id}
          userName={userName}
          date={date}
          packName={name}
          cardsCount={cardsCount}
          id={id}
          onLearnClick={onLearnClick}
        />
      )
    },
  )

  return (
    <TableStyled>
      <SearchField
        value=""
        onChangeWithDebounce={onChangeDebounceRequest}
        placeholder={"Enter pack's title for search"}
      />
      <TableHead>
        <TableCell onClick={sortByName}>Name</TableCell>
        <TableCell onClick={sortByCardsCount}>Cards</TableCell>
        <TableCell onClick={sortByDate}>Last updated</TableCell>
        <TableCell onClick={sortByUserName}>Created by</TableCell>
        <TableCell>Action</TableCell>
      </TableHead>
      {tableRows}
      <Pagination
        pageCount={currentPage}
        cardPacksTotalCount={cardPacksTotalCount}
        setCurrentPage={handlePageChange}
      />
      <Modal
        component={<Card />}
        handleOpen={() => {
          setModalOpen(!isModalOpen)
        }}
        isOpen={isModalOpen}
      />
    </TableStyled>
  )
}
