import React, { FC } from 'react'

import { SearchField } from 'components/common/searchField/SearchField'
import { CardList } from 'pages/cardList/CardList'

export const MainPage: FC = () => {
  const someFoo = (): void => {
    console.log('some foo')
  }
  return (
    <div>
      <div>Packs</div>
      <CardList />
      <SearchField value="a" onChangeWithDebounce={() => console.log('a')} />
    </div>
  )
}
