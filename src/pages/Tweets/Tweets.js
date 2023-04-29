import Container from 'components/Container/Container';
import GoBackBtm from 'components/GoBackBtm/GoBackBtm';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { getUsers } from 'services/usersAPI';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      try {
        const data = await getUsers();

        setTweets(data);
      } catch (error) {}
    }
    getAllUsers();
  }, []);

  return (
    <Container>
      <GoBackBtm />
      <TweetsList tweets={tweets} />
    </Container>
  );
};

export default Tweets;
