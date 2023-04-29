import styled from 'styled-components';
import bg from '../../images/bg@1x.png';
import bg2x from '../../images/bg@2x.png';

export const TweetItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.big};
  background-image: url(${bg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bg2x}),
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background-repeat: no-repeat;
  background-size: 222px 113px, 100% 100%;
  background-position: 50% 24px, center;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 300px;
    height: 350px;
    background-size: 200px 108px, 100% 100%;
    background-position: 50% 24px, center;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 380px;
    height: 460px;
    background-size: 308px 168px, 100% 100%;
    background-position: 50% 28px, center;
  }
`;

export const StyledWrapp = styled.div`
  height: 167px;
  border-bottom: 8px solid #ebd8ff;

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    height: 214px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 159px;
    z-index: 0;
    width: 100%;
    height: 8px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;

    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      top: 206px;
    }
  }
`;

export const StyledLogo = styled.img`
  padding: 20px;
`;
export const AvatarWrapp = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};
  border-width: 8px;
  background-color: ${p => p.theme.colors.bgColor};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const StyledImg = styled.div`
  background-color: ${p => p.theme.colors.bg2};
  border-radius: ${p => p.theme.radii.round};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.main};
  text-transform: uppercase;
  padding-top: 32px;
  color: ${p => p.theme.colors.mainText};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes.l};
    height: 246px;
    padding-top: 62px;
  }
`;

export const Info = styled.p`
  margin-bottom: 8px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 16px;
  }
`;

export const BtnStyled = styled.button`
  width: 160px;
  height: 45px;
  margin-top: 26px;
  margin-bottom: 26px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.main};
  color: ${p => p.theme.colors.btnText};
  background: ${p => p.theme.colors.btnFollow};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: ${p => p.theme.radii.normal};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 196px;
    height: 50px;
    margin-top: 26px;
    margin-bottom: 36px;
    font-size: ${p => p.theme.fontSizes.m};
  }

  &:hover {
    background: ${p => p.theme.colors.btnFollowing};
  }
`;
