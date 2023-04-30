import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledText = styled.h1`
  margin: 50px auto;
  text-align: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: underline;
  margin-left: 8px;
  margin-right: 8px;
  color: ${p => p.theme.colors.bg2};
`;
