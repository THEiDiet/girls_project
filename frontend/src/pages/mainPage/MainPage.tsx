import React, { FC } from 'react'

import { SearchField } from '../../components/common/searchField/SearchField'

export const MainPage: FC = () => {
  const someFoo = (): void => {
    console.log('some foo')
  }
  return (
    <div>
      <div>Packs</div>
      <SearchField value="a" onChangeWithDebounce={() => console.log('a')} />
    </div>
  )
}
