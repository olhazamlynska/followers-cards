import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  padding: 0 16px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: ${p => p.theme.breakpoints[1]};
    padding: 0 32px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: ${p => p.theme.breakpoints[2]};
    padding: 0 100px;
  }
`;
