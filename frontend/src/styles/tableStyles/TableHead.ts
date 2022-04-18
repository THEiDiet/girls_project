import styled from 'styled-components'

export const TableHead = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;

  div:nth-child(1) {
    flex: 0 0 30%;
  }
  div:nth-child(2) {
    flex: 0 0 5%;
  }
  div:nth-child(3) {
    flex: 0 0 15%;
  }
  div:nth-child(4) {
    flex: 0 0 30%;
  }
  div:nth-child(5) {
    flex: 0 0 20%;
  }
`
