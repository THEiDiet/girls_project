import React from 'react'

import { SearchField } from '../../components/common/searchField/SearchField'

export const MainPage = () => {
  const someFoo = () => {
    console.log('some foo')
  }
  return (
    <div>
      <div>Packs</div>
      <SearchField />
    </div>
  )
}
