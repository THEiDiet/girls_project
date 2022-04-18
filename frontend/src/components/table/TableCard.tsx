import React, { FC } from 'react'

import { Button } from 'styles'
import { TableItem } from 'styles/tableStyles/TableItem'

type TableCardProps = {
  packName: string
  userName: string
  date: string
  cardsCount: number
  id: string
  onLearnClick: (id: string) => void
}

const TableCard: FC<TableCardProps> = props => {
  const { packName, cardsCount, userName, date, id, onLearnClick } = props
  const handleLearnClick = (): void => {
    onLearnClick(id)
  }
  return (
    <TableItem>
      <div className="name">{packName}</div>
      <div>{cardsCount}</div>
      <div>{date}</div>
      <div>{userName}</div>
      <div className="button">
        <Button onClick={handleLearnClick}>Learn</Button>
        <Button>Learn</Button>
      </div>
    </TableItem>
  )
}

export default TableCard
