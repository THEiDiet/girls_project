import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background: #365a67;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;
  position: relative;
  top: 60px;
  left: 0;
  background: #dde9ec;
`

export const HeaderButton = styled.button`
  background: red;
`
