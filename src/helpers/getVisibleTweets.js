export const getVisibleTweets = (filter, users) => {
  if (filter === 'showAll') {
    return users;
  } else if (filter === 'follow') {
    return users.filter(
      user => JSON.parse(localStorage.getItem(`user_${user.id}`)) !== true
    );
  } else if (filter === 'following') {
    return users.filter(
      user => JSON.parse(localStorage.getItem(`user_${user.id}`)) === true
    );
  }
};
