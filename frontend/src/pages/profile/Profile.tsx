import React, { FC } from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

// import { userApi } from '../../api'
import { Button } from '../../components/common'
import { RootState } from '../../store/config'
import { Container, StyledHeader } from '../../styles/profileStyles'

// import user from './user.jpg'

export const Profile: FC = () => {
  const authMe = useSelector<RootState, boolean>(state => state.test.authMe)
  // const initializeApp = async () => {
  //   const res = await userApi.me({
  //     email: 'log@mail.ru',
  //     password: '123456789',
  //     rememberMe: true,
  //   })
  //   console.log(res)
  // }
  if (!authMe) {
    return <Navigate to="/login" />
  }
  return (
    <StyledHeader>
      <Container>
        <div className="profileSection">
          {/* <img src={user} alt="userImg" width="100px" height="80px" /> */}
          <h3>User Name</h3>
          <p>Description</p>
          <Button>Log out</Button>
        </div>
        <div className="cardBox">
          <h1>Pack</h1>
          <h2>Number of card</h2>
          <p>1-100</p>
        </div>
      </Container>
    </StyledHeader>
  )
}
