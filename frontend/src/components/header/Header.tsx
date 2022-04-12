import React, { ReactElement, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { useAppSelector } from '../../hooks'
import { logOutTC } from '../../store/thunks/appThunks'
import { HeaderButton } from '../../styles/headerStyles'
import HeaderLink from '../common/HeaderLink'

import { Paths } from 'enums'
import { Container, Main, StyledHeader } from 'styles'

const linksArrayAuthorized = [
  { path: Paths.Home, name: 'Packs' },
  { path: Paths.Profile, name: 'Profile' },
  { path: Paths.RestorePassword, name: 'Restore Pass' },
]
const linksArrayUnAuthorized = [
  { path: Paths.Auth, name: 'Auth' },
  { path: Paths.Login, name: 'Login' },
]

export const Header = (): ReactElement => {
  const isAuthorized = useAppSelector(state => state.app.isAuthorized)
  const [links, setLinks] = useState(linksArrayUnAuthorized)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isAuthorized) {
      setLinks(linksArrayAuthorized)
    }
    if (!isAuthorized) {
      setLinks(linksArrayUnAuthorized)
    }
  }, [isAuthorized])

  const logOut = (): void => {
    dispatch(logOutTC())
  }

  return (
    <>
      <StyledHeader>
        <Container>
          {links.map(link => (
            <HeaderLink path={link.path} title={link.name} key={link.name} />
          ))}
          {isAuthorized && <HeaderButton onClick={logOut}>Log Out</HeaderButton>}
        </Container>
      </StyledHeader>

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  )
}
