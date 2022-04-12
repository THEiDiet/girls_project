import React, { FC } from 'react'

import { ModalError } from '../../components/modalError/ModalError'
import { Container, StyledHeader } from '../../styles/ProfileStyled'

export const Profile: FC = () => (
  <StyledHeader>
    <Container>
      <div className="profileSection">
        <img src="#" alt="userImg" width="100px" height="80px" />
        <h3>User Name</h3>
        <p>Description</p>
      </div>
      <div className="cardBox">
        <h1>Pack</h1>
        <h2>Number of card</h2>
        <p>1-100</p>
        <ModalError />
      </div>
    </Container>
  </StyledHeader>
)
