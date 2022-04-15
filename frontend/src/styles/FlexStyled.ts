import styled, { CSSProp } from 'styled-components'

type FlexPropsType = {
  justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around'
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  alignItems?: 'flex-end' | 'flex-start' | 'center' | 'self-end' | 'self-start'
  alignSelf?: 'self-start' | 'self-end' | 'center' | 'auto'
  margin?: CSSProp
  padding?: CSSProp
  background?: CSSProp
}

export const Flex = styled.div<FlexPropsType>`
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
`
