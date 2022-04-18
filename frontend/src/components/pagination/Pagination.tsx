/* eslint-disable */
import React, {FC, useState} from 'react'

import {Button} from 'styles';
import {WrapperPaginator} from 'styles/StyledPagination';


type PaginationType = {
  pageCount: any
  cardPacksTotalCount: any
  setCurrentPage: (page: number) => void
}
export const Pagination: FC<PaginationType> = ({
  cardPacksTotalCount,
  pageCount,
  setCurrentPage,
}) => {

  const pagesCount = Math.ceil(cardPacksTotalCount / pageCount)
  let pages: Array<any> = []

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }
  const portionSize = 5; // порция которая видна в пагинации
  const portionCount = Math.ceil(pagesCount / portionSize) // количество порций по 10 страниц

  const [portion, setPortion] = useState(1)
  const leftNumber = (portion - 1) * portionSize + 1
  const rightNumber = portion * portionSize
  const correctValue = pages.filter((p) => p ? p >= leftNumber && p <= rightNumber : '')

  const onClickPageChanged = (page: number) => {
    setCurrentPage(page)
  }

  return (
      <WrapperPaginator>
          {/*<Select count={pageCount}/>*/}
          {portion > 1 &&
              <Button onClick={() => {
                setPortion(portion - 1)
              }} >
                Prev
              </Button>
          }
          {correctValue.map(p => {
            return (
                <Button size="small"
                        key={p}
                        onClick={() => onClickPageChanged(p)}
                        style={{height: '30px', width: '30px', margin: '10px', textAlign: 'center', cursor: 'pointer'}}>{p}
                </Button>
            )
          })}
          {portionCount > portion &&
              <Button  onClick={() => {
                setPortion(portion + 1)
              }} >Next
              </Button>}
      </WrapperPaginator>
  )
}
