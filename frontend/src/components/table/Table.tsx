import React, { FC, useEffect, useState } from 'react'

import { Card } from 'components/card/Card'
import { Modal } from 'components/common/modal/Modal'
import { Pagination } from 'components/pagination/Pagination'
import { EHelpers, EPacksSort } from 'enums'
import { useAppDispatch, useAppSelector } from 'hooks'
import { setCurrentPageAC, sortCards } from 'store/reducers/packsReducer'
import { TableCell, TableRow, TableStyled } from 'styles'
import { CardsPackT } from 'types'

export const Table: FC = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const packs = useAppSelector(state => state.packs.packs)
  const currentPage = useAppSelector(state => state.packs.currentPage)
  const portionSize = useAppSelector(state => state.packs.amountOfElementsToShow)
  const [pieceOfPacks, setPieceOfPacks] = useState<CardsPackT[]>([])
  const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)

  const setCurrentPage = (value: number): void => {
    dispatch(setCurrentPageAC(value))
  }

  const sortByName = (): void => {
    dispatch(sortCards(EPacksSort.Name))
  }
  const sortByUserName = (): void => {
    dispatch(sortCards(EPacksSort.UserName))
  }
  const sortByDate = (): void => {
    dispatch(sortCards(EPacksSort.Date))
  }
  const sortByCardsCount = (): void => {
    dispatch(sortCards(EPacksSort.CardsCount))
  }
  const onTableRowClick = (id: string): void => {
    dispatch({ type: 'GET_ONE_PACK_CARDS', payload: id })
    setModalOpen(true)
  }
  const tableRows = pieceOfPacks.length
    ? pieceOfPacks.map(({ user_name: userName, _id: id, name, updated, cardsCount }) => {
        const date = new Date(updated).toLocaleDateString()
        return (
          <TableRow key={id} onClick={() => onTableRowClick(id)}>
            <TableCell>{name}</TableCell>
            <TableCell>{cardsCount}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{userName}</TableCell>
            <TableCell>text</TableCell>
          </TableRow>
        )
      })
    : []
  useEffect(() => {
    setPieceOfPacks(
      packs.slice((currentPage - EHelpers.One) * portionSize, currentPage * portionSize),
    )
  }, [packs, currentPage, portionSize])
  return (
    <TableStyled>
      <TableRow>
        <TableCell onClick={sortByName}>Name</TableCell>
        <TableCell onClick={sortByCardsCount}>Cards</TableCell>
        <TableCell onClick={sortByDate}>Last updated</TableCell>
        <TableCell onClick={sortByUserName}>Created by</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
      {tableRows}
      <Pagination
        page={currentPage}
        pageCount={portionSize}
        cardPacksTotalCount={cardPacksTotalCount}
        setCurrentPage={setCurrentPage}
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
