import React, { ChangeEvent, FC, useState } from 'react'

import { ModalContent, WrapperProfileModal } from 'pages/profile/StyledProfileModal'
import { StyledUserImg, Button, StyledInput } from 'styles'

type ProfileModalType = {
  modalActive: boolean
  setModalActive: (value: boolean) => void
  userAvatar: string
  userName: string
  userEmail: string
}

export const ProfileModal: FC<ProfileModalType> = ({
  modalActive,
  setModalActive,
  userAvatar,
  userName,
  userEmail,
}) => {
  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  if (!modalActive) return null

  const changeNameHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }

  const changeEmailHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }
  return (
    <WrapperProfileModal>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>Personal Information</h2>
        <StyledUserImg src={userAvatar} alt="user-avatar" />
        <h2>{userName}</h2>
        <StyledInput
          type="text"
          value={name}
          name="Nickname"
          width="100%"
          onChange={changeNameHandle}
        />
        <StyledInput
          type="email"
          value={email}
          name="Email"
          width="100%"
          onChange={changeEmailHandle}
        />
        <Button fullWidth mb="0" onClick={() => setModalActive(false)}>
          Cansel
        </Button>
        <Button fullWidth mb="0">
          Save
        </Button>
      </ModalContent>
    </WrapperProfileModal>
  )
}
