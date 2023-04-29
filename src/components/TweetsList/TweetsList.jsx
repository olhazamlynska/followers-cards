import TweetsItem from 'components/TweetsItem/TweetsItem';
import { TweetsUl, ContentWrapp, BtnLoadMore } from './TweetsList.styled';

const TweetsList = ({ tweets }) => {
  return (
    <ContentWrapp>
      <TweetsUl>
        {tweets.map((tweet, idx) => (
          <TweetsItem key={`${tweet.id}-${idx}`} tweet={tweet} />
        ))}
      </TweetsUl>
      <BtnLoadMore>Load more</BtnLoadMore>
    </ContentWrapp>
  );
};

export default TweetsList;
