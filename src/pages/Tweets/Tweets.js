import Container from 'components/Container/Container';
import GoBackBtm from 'components/GoBackBtm/GoBackBtm';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { getUsers, getUsersCount } from 'services/usersAPI';
import { BtnLoadMore } from './Tweets.styled';
import toast from 'react-hot-toast';
import Loader from 'components/Loader/Loader';

const Tweets = () => {
  const [tweets, setTweets] = useState(
    JSON.parse(localStorage.getItem('tweets')) || []
  );
  const [page, setPage] = useState(1);
  const [totalUsersCount, setTotalUsersCount] = useState(
    localStorage.getItem('totalCountTweets') || null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        const data = await getUsers(page);
        setTweets(prevTweets => [...prevTweets, ...data]);
      } catch (error) {
        setError(true);
        toast.error('Someting went wrong try again...');
      } finally {
        setIsLoading(false);
      }
    }
    getAllUsers();
  }, [page]);

  useEffect(() => {
    async function getAllUsersCount() {
      if (totalUsersCount) {
        return;
      }
      try {
        setIsLoading(true);
        const count = await getUsersCount();
        setTotalUsersCount(count);
        localStorage.setItem('totalCountTweets', JSON.stringify(count));
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAllUsersCount();
  }, [totalUsersCount]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const totalTweetsCondition = totalUsersCount - page * 3;
  return (
    <Container>
      <GoBackBtm />
      {error && <p>Something went wrong, try again!</p>}
      {isLoading && <Loader />}
      {tweets && (
        <TweetsList
          tweets={tweets}
          onClick={loadMore}
          totalUsersCount={totalUsersCount}
        />
      )}
      {tweets.length > 0 && totalTweetsCondition > 0 && (
        <BtnLoadMore onClick={loadMore} type="button">
          Load more
        </BtnLoadMore>
      )}
    </Container>
  );
};

export default Tweets;
