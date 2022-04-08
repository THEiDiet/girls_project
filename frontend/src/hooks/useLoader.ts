import { useState } from 'react'

export const useLoader = (): {
  isFetching: boolean
  startFetching: () => void
  stopFetching: () => void
} => {
  const [isFetching, setIsFetching] = useState(false)
  const stopFetching = (): void => {
    setIsFetching(false)
  }
  const startFetching = (): void => {
    setIsFetching(true)
  }
  return { isFetching, startFetching, stopFetching }
}
