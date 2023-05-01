import styled from 'styled-components';

export const SelectStyled = styled.select`
  min-width: 113px;
  height: 51px;
  margin-left: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.main};
  text-align: center;
  color: ${p => p.theme.colors.mainText};
  background-color: ${p => p.theme.colors.bg};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 130px;
    height: 55px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 16px;
    width: 160px;
    height: 65px;
  }
  option {
    color: ${p => p.theme.colors.bg};
    background: ${p => p.theme.colors.bgColorMain};
    font-weight: ${p => p.theme.fontWeights.normal};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
