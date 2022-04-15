import { cardsApi } from 'api/packsApi'
import { AppDispatch } from 'store/config'
import { setPacks } from 'store/reducers/packsReducer'
import { GetPackResponseT } from 'types'

export const getCardsTC = () => async (dispatch: AppDispatch) => {
  const res: GetPackResponseT = await cardsApi.getPacks()
  dispatch(setPacks(res))
}
