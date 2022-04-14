import React, { FC, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { SnackbarTimer } from 'enums/SnackbarTimer'
import { useAppSelector, useDebounce } from 'hooks'
import { setSnackbar } from 'store/reducers'
import { Flex } from 'styles/FlexStyled'
import { SnackbarErrorWrapper, ButtonCloseModal } from 'styles/StyledSnackbar'

export const Snackbar: FC = () => {
  const dispatch = useDispatch()

  const message = useAppSelector(state => state.app.snackbar)
  const [isMessage, setIsMessage] = useState(false)

  const closeSnackbar = (): void => {
    setIsMessage(true)

    setTimeout(() => {
      dispatch(setSnackbar(null))
    }, SnackbarTimer.DELETE_SNACKBAR_DELAY)
  }

  const debounce = useDebounce(closeSnackbar, SnackbarTimer.AUTO_HIDE_DURATION_DELAY)

  useEffect(() => {
    if (message) {
      setIsMessage(true)
      debounce(message)
    }
  }, [message])

  return (
    <SnackbarErrorWrapper>
      <Flex align-items="center">{message}</Flex>
      <Flex alignSelf="self-start">
        <ButtonCloseModal role="presentation" onClick={closeSnackbar}>X</ButtonCloseModal>
      </Flex>
    </SnackbarErrorWrapper>
  )
}
