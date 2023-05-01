import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { updateUser } from 'services/usersAPI';
import defaultAvatar from '../../images/defaultAvatar.png';
import logo from '../../images/logo@1x.png';
import {
  StyledImg,
  TweetItem,
  StyledLogo,
  StyledWrapp,
  AvatarWrapp,
  InfoWrapper,
  Info,
  BtnStyled,
  StyledLogoLink,
} from './TweetsItem.styled';

const TweetsItem = ({ id, user, avatar, followers, tweets }) => {
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
      toast.success(`You are following user ${user}.`);
    } else {
      const updateFollowers = await updateUser(id, {
        followers: Number(allFollowers) - 1,
      });
      setAllFollowers(updateFollowers.followers);
      setIsFollowing(false);
      toast.success(`You stopped following user ${user}.`);
      localStorage.removeItem(`user_${id}`);
    }
  };

  const backgroundColor = isFollowing ? '#5CD3A8' : '#EBD8FF';
  const followText = isFollowing ? 'Following' : 'Follow';

  return (
    <TweetItem>
      <StyledWrapp>
        <StyledLogo>
          <StyledLogoLink href="https://m.goit.global/ua/">
            <img src={logo} alt="Logo" width="76" height="22" />
          </StyledLogoLink>
        </StyledLogo>
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
        <p>
          {allFollowers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          followers
        </p>
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

TweetsItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
};
