import React, { FC } from 'react'

import { EHelpers } from 'enums'
import { useAppSelector } from 'hooks'

export const Card: FC = () => {
  const currentPack = useAppSelector(state => state.cards.pack)
  // TODO: in process... (´。＿。｀)
  return currentPack && currentPack.cards[EHelpers.Zero] ? (
    <div>
      <div>{currentPack.cards[EHelpers.Zero].question}</div>
    </div>
  ) : (
    <div>loading</div>
  )
}
