import { AxiosError, AxiosResponse } from 'axios'

import { cardsApi } from 'api/packsApi'
import { AppDispatch, RootState } from 'store/config'
import { setOnePack } from 'store/reducers'
import { setPacks } from 'store/reducers/packsReducer'
import { GetPacksResponseT, PackT } from 'types'
import { GetOnePackRequest, GetPacksPayload } from 'types/PacksT'

const selectPageCount = (state: RootState): number => state.packs.pageCount
const selectMin = (state: RootState): number => state.packs.rangeValues.minCardsCount
const selectMax = (state: RootState): number => state.packs.rangeValues.maxCardsCount

const selectCurrentPage = (state: RootState): number => state.packs.currentPage

export const getPacksTC =
  (payload: Partial<GetPacksPayload>) => async (dispatch: AppDispatch) => {
    const res: AxiosResponse<GetPacksResponseT> = await cardsApi.getPacks(payload)
    dispatch(setPacks(res.data))
  }

export const getOnePackTC =
  (payload: Partial<GetOnePackRequest>) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const pagesCount = selectPageCount(getState())
      const currentPage = selectCurrentPage(getState())
      const res: AxiosResponse<PackT> = await cardsApi.getOnePack(payload)
      dispatch(setOnePack(res.data))
    } catch (e) {
      console.log((e as AxiosError)?.response?.data)
    }
  }
