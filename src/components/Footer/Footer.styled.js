import styled from 'styled-components';

export const StyledFotter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const StyledText = styled.p`
  margin-right: 5px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: 10px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: 15px;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.main};
  }
`;
