/* eslint-disable */
import React, { FC } from 'react'

import { getPagesForRender } from 'utils/pages-for-render'

type PaginationType = {
  page: any
  pageCount: any
  cardPacksTotalCount: any
  setCurrentCards: (value: any) => void
  setCurrentPage: (value: any) => void
}

export const Pagination: FC<PaginationType> = ({
  cardPacksTotalCount,
  page,
  pageCount,
  setCurrentCards,
  setCurrentPage,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers

  const pagesCount = Math.ceil(cardPacksTotalCount / pageCount)
  const pageNumbers: Array<any> = []
  // eslint-disable-next-line no-plusplus,@typescript-eslint/no-magic-numbers
  for (let i = 1; i < pagesCount; i += 1) {
    pageNumbers.push(pageNumbers)
  }

  const pagesForRender = getPagesForRender(pageNumbers, page, pagesCount)

  const onClickPageChanged = (page: any) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <div>
        {' '}
        {page > 3 && (
          <>
            <button onClick={() => onClickPageChanged(page - 1)}>◁</button>
            <button onClick={() => onClickPageChanged(1)}> 1</button>
            <span>...</span>
          </>
        )}
      </div>

      <div>
        {pagesForRender.map(p => (
          <button onClick={() => onClickPageChanged(p)} key={p}>
            {' '}
            {p}{' '}
          </button>
        ))}
      </div>
      <div>
        {page < pageNumbers.length - 2 && (
          <>
            <span>...</span>
            <button onClick={() => onClickPageChanged(pageNumbers.length)}>
              {pageNumbers.length}
            </button>
            <button onClick={() => onClickPageChanged(page + 1)}>▷</button>
          </>
        )}
      </div>
    </div>
  )
}
