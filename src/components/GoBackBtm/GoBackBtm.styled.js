import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  min-width: 113px;
  margin: ${p => p.theme.space[5]}px;
  margin-right: auto;
  padding: 16px 32px;
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
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${p => p.theme.colors.bgColor};
    color: ${p => p.theme.colors.btnText};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 18px 52px;
    width: 130px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 16px;
    padding: 23px 52px;
    width: 160px;
  }
`;
