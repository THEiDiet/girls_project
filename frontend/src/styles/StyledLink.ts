import styled from 'styled-components'

type StyledLinkT = {
  isActive: boolean
}

export const StyledLink = styled.span.attrs<StyledLinkT, StyledLinkT>(({ isActive }) => ({
  isActive,
}))`
  color: ${({ isActive }) => (isActive ? '#eee' : '#94afaf')};
`
