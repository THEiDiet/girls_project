import { AxiosResponse } from 'axios'

import { instance } from 'api/config'
import { EHelpers } from 'enums'
import { GetPacksResponseT } from 'types'
import { GetOnePackRequest, GetPacksPayload } from 'types/PacksT'

export const cardsApi = {
  setPack() {
    const data = {
      cardsPack: {
        name: 'name',
        deckCover: 'some cover12',
        private: false,
      },
    }
    const res = instance.post('cards/pack', data)
    console.log(res)
  },
  getPacks: (
    payload: Partial<GetPacksPayload>,
  ): Promise<AxiosResponse<GetPacksResponseT>> => {
    const {
      packName = '',
      min = EHelpers.Zero,
      sortPacks = '',
      userId = '',
      max = EHelpers.Ten,
      pageCount = EHelpers.Ten,
      page = EHelpers.One,
    } = payload
    return instance.get<GetPacksResponseT>(`cards/pack`, {
      params: {
        packName,
        min,
        max,
        sortPacks,
        pageCount,
        page,
        user_id: userId,
      },
    })
  },

  getOnePack: (payload: Partial<GetOnePackRequest>) => {
    const {
      cardQuestion,
      cardsPackId,
      cardAnswer,
      sortCards,
      pageCount,
      page,
      min = EHelpers.Zero,
      max,
    } = payload
    return instance.get(`cards/card`, {
      params: {
        cardAnswer,
        cardQuestion,
        cardsPack_id: cardsPackId,
        min,
        max,
        sortCards,
        page,
        pageCount,
      },
    })
  },
}
