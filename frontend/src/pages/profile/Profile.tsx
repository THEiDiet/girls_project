import React, { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Paths } from 'enums'
import { useAppSelector } from 'hooks'
import { ProfileModal } from 'pages/profile/ProfileModal'
import { StyledProfile, StyledUserImg, Button, WrapperProfile } from 'styles'

export const Profile: FC = () => {
  const navigate = useNavigate()

  const isAuthorized = useAppSelector(state => state.app.isAuthorized)
  const userName = useAppSelector(state => state.user.user.name)
  const userAvatar = useAppSelector(state => state.user.user.avatar)
  const userEmail = useAppSelector(state => state.user.user.email)

  const [modalActive, setModalActive] = useState(false)

  if (!isAuthorized) {
    navigate(Paths.Login)
  }
  const openModal = (): void => {
    setModalActive(!false)
  }

  return (
    <WrapperProfile>
      <StyledProfile>
        <StyledUserImg src={userAvatar} alt="user-avatar" />
        <h2>{userName}</h2>
        {/* eslint-disable-next-line react/button-has-type */}
        <Button onClick={openModal}>Edit profile</Button>
        <ProfileModal
          modalActive={modalActive}
          setModalActive={setModalActive}
          userAvatar={userAvatar}
          userName={userName}
          userEmail={userEmail}
        />
      </StyledProfile>
    </WrapperProfile>
  )
}
