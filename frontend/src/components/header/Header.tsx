import React, { ReactElement } from 'react'

import { Link, Outlet } from 'react-router-dom'

import { Paths } from 'enums'
import { StyledHeader, Main, Container } from 'styles'

export const Header = (): ReactElement => (
  <>
    <StyledHeader>
      <Container>
        <Link to={Paths.Home}>Home page</Link>
        <Link to={Paths.Profile}>Profile</Link>
        <Link to={Paths.Auth}>Auth</Link>
        <Link to={Paths.Login}>Login</Link>
        <Link to={Paths.RestorePassword}>Restore Password</Link>
        <Link to={Paths.ChangePassword}>Change Password</Link>
        <Link to={Paths.Test}>Test</Link>
      </Container>
    </StyledHeader>
    <Main>
      <Container>
        <Outlet />
      </Container>
    </Main>
  </>
)
