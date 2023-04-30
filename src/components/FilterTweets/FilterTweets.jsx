import { SelectStyled } from './FilterTweets.styled';

const FilterTweet = ({ filterValue, handleChange }) => {
  return (
    <SelectStyled value={filterValue} onChange={handleChange}>
      <option value="showAll">Show All</option>
      <option value="follow">Follow</option>
      <option value="following">Following</option>
    </SelectStyled>
  );
};

export default FilterTweet;
