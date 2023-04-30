import styled from 'styled-components';

export const TweetsUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    gap: 48px;
  }
`;

export const ContentWrapp = styled.div`
  display: block;
`;
