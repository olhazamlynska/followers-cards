import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledText = styled.h1`
  margin: 50px auto;
  text-align: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: underline;
  margin-left: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.bg2};
`;
