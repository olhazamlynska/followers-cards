import TweetsItem from 'components/TweetsItem/TweetsItem';
import { TweetsUl, ContentWrapp } from './TweetsList.styled';

const TweetsList = ({ tweets }) => {
  return (
    <ContentWrapp>
      <TweetsUl>
        {tweets.map(({ id, avatar, tweets, followers }) => {
          return (
            <TweetsItem
              id={id}
              key={id}
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
