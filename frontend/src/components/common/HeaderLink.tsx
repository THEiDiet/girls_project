import React, { FC } from 'react'

import { NavLink } from 'react-router-dom'

import { StyledLink } from '../../styles'

type HeaderLinkProps = {
  path: string
  title: string
}

const HeaderLink: FC<HeaderLinkProps> = ({ path, title }) => (
  <NavLink to={path}>
    {({ isActive }: { isActive: boolean }) => (
      <StyledLink isActive={isActive}>{title}</StyledLink>
    )}
  </NavLink>
)

export default HeaderLink
