import React, { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { ModalError } from '../../components/modalError/ModalError'
import { Paths } from '../../enums'
import { useAppSelector } from '../../hooks'

import { StyledProfile, StyledUserImg } from 'styles'

export const Profile: FC = () => {
  const navigate = useNavigate()
  // const isAuthorized = useAppSelector(state => state.app.isAuthorized)
  const isAuthorized = useAppSelector(state => state.app.isAuthorized)
  const name = useAppSelector(state => state.user.user)

  if (!isAuthorized) {
    navigate(Paths.Login)
  }

  return (
    <StyledProfile>
      <h1>Profile</h1>
      <StyledUserImg src={name.avatar} alt="user-avatar" />
      <h2>{name.name}</h2>
      <h3>Number of card</h3>
      <p>1-100</p>
      <div>
        <ModalError />
      </div>
    </StyledProfile>
  )
}
