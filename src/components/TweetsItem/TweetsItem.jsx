import { useState } from 'react';
import { updateUser } from 'services/usersAPI';
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

const TweetsItem = ({ tweet: { id, followers, avatar, tweets } }) => {
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`user_${id}`) || false
  );
  const [allFollowers, setAllFollowers] = useState(followers);

  const handleClick = async () => {
    if (!isFollowing) {
      const updateFollowers = await updateUser(id, {
        followers: Number(allFollowers) + 1,
      });
      setAllFollowers(updateFollowers.followers);
      setIsFollowing(true);
      localStorage.setItem(`user_${id}`, JSON.stringify(true));
    } else {
      const updateFollowers = await updateUser(id, {
        followers: Number(allFollowers) - 1,
      });
      setAllFollowers(updateFollowers.followers);
      setIsFollowing(false);
      localStorage.removeItem(`user_${id}`);
    }
  };
  const backgroundColor = isFollowing ? '#5CD3A8' : '#EBD8FF';
  const followText = isFollowing ? 'Following' : 'Follow';
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
        <p>{allFollowers} followers</p>
        <BtnStyled
          onClick={handleClick}
          backgroundColor={backgroundColor}
          type="button"
        >
          {followText}
        </BtnStyled>
      </InfoWrapper>
    </TweetItem>
  );
};
export default TweetsItem;
