import PropTypes from 'prop-types';
import TweetsItem from 'components/TweetsItem/TweetsItem';
import { TweetsUl, ContentWrapp } from './TweetsList.styled';

const TweetsList = ({ tweets }) => {
  return (
    <ContentWrapp>
      <TweetsUl>
        {tweets.map(({ id, user, avatar, tweets, followers }) => {
          return (
            <TweetsItem
              id={id}
              key={id}
              user={user}
              avatar={avatar}
              followers={followers}
              tweets={tweets}
            />
          );
        })}
      </TweetsUl>
    </ContentWrapp>
  );
};

export default TweetsList;

TweetsList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      tweets: PropTypes.number.isRequired,
    })
  ),
};
