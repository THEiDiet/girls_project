import React, { ReactElement } from 'react'

import { Link, Outlet } from 'react-router-dom'

import { Paths } from 'enums'
import { StyledHeader, Container, Main } from 'styles'

export const Header = (): ReactElement => (
  <>
    <StyledHeader>
      <Container>
        <Link to={Paths.Home}>Home page</Link>
        <Link to={Paths.Sample}>Sample</Link>
      </Container>
    </StyledHeader>
    <Main>
      <Outlet />
    </Main>
  </>
)
