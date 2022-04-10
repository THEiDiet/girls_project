import React, { FC } from 'react'

// import { userApi } from '../../api'
import { userApi } from '../../api'
import { useAppDispatch } from '../../hooks'
import { authorize } from '../../store/reducers'
import { Container, StyledHeader } from '../../styles/profileStyles'

import { Button } from 'styles'

// import user from './user.jpg'

export const Profile: FC = () => {
  const dispatch = useAppDispatch()
  const logout = (): void => {
    userApi.logout().then(res => dispatch(authorize(false)))
  }
  // const authMe = useSelector<RootState, boolean>(state => state.app.authMe)
  // const initializeApp = async () => {
  //   const res = await userApi.me({
  //     email: 'log@mail.ru',
  //     password: '123456789',
  //     rememberMe: true,
  //   })
  //   console.log(res)
  // }
  // if (!authMe) {
  //   return <Navigate to="/login" />
  // }
  return (
    <StyledHeader>
      <Container>
        <div className="profileSection">
          {/* <img src={user} alt="userImg" width="100px" height="80px" /> */}
          <h3>User Name</h3>
          <p>Description</p>
          <Button onClick={logout}>Log out</Button>
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
