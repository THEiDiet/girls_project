import { AxiosResponse } from 'axios'

import { instance } from 'api/config'
import { GetPackResponseT, PackT } from 'types'

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
  getPacks: async (payload: string = '4660') => {
    const res: AxiosResponse<GetPackResponseT> = await instance.get(
      `cards/pack${payload && `?pageCount=${payload}`}`,
    )
    return res.data
  },
  getOnePackCards: async (payload: string = '') => {
    const res: AxiosResponse<PackT> = await instance.get(
      // TODO: сделать полный набор параметров, не только cardsPack
      `cards/card?cardsPack_id=${payload}`,
    )
    return res.data
  },
}
