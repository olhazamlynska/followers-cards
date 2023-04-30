import TweetsItem from 'components/TweetsItem/TweetsItem';
import { TweetsUl, ContentWrapp } from './TweetsList.styled';

const TweetsList = ({ tweets }) => {
  return (
    <ContentWrapp>
      <TweetsUl>
        {tweets.map((tweet, idx) => (
          <TweetsItem key={`${tweet.id}-${idx}`} tweet={tweet} />
        ))}
      </TweetsUl>
    </ContentWrapp>
  );
};

export default TweetsList;
