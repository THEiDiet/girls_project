import React, { FC, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Paths } from 'enums'
import { useAppSelector } from 'hooks'
import { StyledProfile, StyledUserImg, WrapperProfile } from 'styles'

export const Profile: FC = () => {
  const navigate = useNavigate()
  const isAuthorized = useAppSelector(state => state.app.isAuthorized)
  const name = useAppSelector(state => state.user.user)

  useEffect(() => {
    if (!isAuthorized) {
      navigate(Paths.Login)
    }
  }, [isAuthorized])

  return (
    <WrapperProfile>
      <StyledProfile>
        <h1>Profile</h1>
        <StyledUserImg src={name.avatar} alt="user-avatar" />
        <h2>{name.name}</h2>
        <h2>My cards:</h2>
        <h3>{name.publicCardPacksCount}</h3>
      </StyledProfile>
    </WrapperProfile>
  )
}
