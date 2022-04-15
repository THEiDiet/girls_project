import styled from 'styled-components'

type TableCellTAttr = {
  touchable?: boolean
  bold?: boolean
}
type TableCellTProps = {
  cursor: string
  weight: string
}

export const TableCell = styled.div.attrs<TableCellTAttr, TableCellTProps>(
  ({ touchable, bold }) => ({
    cursor: touchable ? 'pointer' : '',
    weight: bold ? '700' : '400',
  }),
)`
  flex: 1 0 20%;
  box-sizing: border-box;
  text-align: center;
  cursor: ${({ cursor }) => cursor};
  font-weight: ${({ weight }) => weight};
`
