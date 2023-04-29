import {
  StyledImg,
  TweetItem,
  StyledLogo,
  StyledWrapp,
  AvatarWrapp,
  InfoWrapper,
  Info,
  BtnStyled,
} from './TweetsItem.styled';
import defaultAvatar from '../../images/defaultAvatar.png';
import logo from '../../images/logo@1x.png';

const TweetsItem = ({ tweet }) => {
  const { followers, avatar, tweets } = tweet;

  return (
    <TweetItem>
      <StyledWrapp>
        <a href="https://m.goit.global/ua/">
          <StyledLogo src={logo} alt="Logo" width="76" height="22" />
        </a>

        <AvatarWrapp>
          <StyledImg>
            <img
              src={avatar || defaultAvatar}
              alt="User avatar"
              width="62"
              height="62"
            />
          </StyledImg>
        </AvatarWrapp>
      </StyledWrapp>
      <InfoWrapper>
        <Info>{tweets} tweets</Info>
        <p>{followers} followers</p>
        <BtnStyled>Follow</BtnStyled>
      </InfoWrapper>
    </TweetItem>
  );
};
export default TweetsItem;
