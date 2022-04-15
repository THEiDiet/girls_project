import styled from 'styled-components'

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  div:nth-child(1) {
    flex: 0 0 30%;
  }

  div:nth-child(2) {
    flex: 0 0 10%;
  }
  div:nth-child(3) {
    flex: 0 0 15%;
  }
  div:nth-child(4) {
    flex: 0 0 35%;
  }
  div:nth-child(5) {
    flex: 0 0 10%;
  }

  &:nth-child(odd) {
    background: rgba(0, 0, 0, 0.05);
  }
`
