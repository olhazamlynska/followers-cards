import TweetsItem from 'components/TweetsItem/TweetsItem';
import { TweetsUl, ContentWrapp } from './TweetsList.styled';

const TweetsList = ({ tweets }) => {
  // const changeFollowers = num => {
  //   console.log(num);
  //   if (num !== null) {
  //     const info = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //     return info;
  //   }
  // };
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
