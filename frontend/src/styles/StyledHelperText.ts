import styled from 'styled-components';

export const HelpText = styled.p`
  margin-top: 20px;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme: { helpTextColor } }) => helpTextColor};
`;
