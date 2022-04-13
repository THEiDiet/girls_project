import React, { FC, useState } from 'react'

import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks'

import { ModalErrorWrapper, ButtonCloseModal, Flex } from 'styles'

export const ModalError: FC = () => {
  const dispatch = useDispatch()

  const error = useAppSelector(state => state.app.errorMessage)
  const [isError, setIsError] = useState(false)

  const closeModal = (): void => {
    setIsError(false)
  }

  return (
    <ModalErrorWrapper>
      <Flex align-items="center">{error}</Flex>
      <Flex alignSelf="self-start">
        <ButtonCloseModal onClick={closeModal}>X</ButtonCloseModal>
      </Flex>
    </ModalErrorWrapper>
  )
}
