import styled from 'styled-components'

export const TableItem = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  .name {
    font-weight: 700;
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

  .button {
    flex: 0 0 20%;
    display: flex;
    justify-content: space-between;
  }
`
