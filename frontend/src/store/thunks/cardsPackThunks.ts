import { AppDispatch, RootState } from '../config'

import { cardsPackApi } from 'api/cardsPackAPI'
import { setPacksAC } from 'store/reducers/cardsPackReducer'

const selectPageCount = (state: RootState): number => state.pack.packs.pageCount

const selectCurrentPage = (state: RootState): number => state.pack.packs.page

export const getCardsPackTC =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const pagesCount = selectPageCount(getState())
      const currentPage = selectCurrentPage(getState())
      cardsPackApi.getCardsPack(pagesCount, currentPage).then(res => {
        dispatch(setPacksAC(res))
      })
    } catch (e) {
      console.log(e)
    }
  }
