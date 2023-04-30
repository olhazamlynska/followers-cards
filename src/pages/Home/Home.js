import Container from 'components/Container/Container';
import { StyledLink, StyledText } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <StyledText>
        Welcome to TWEETS APP! Click
        <StyledLink to={'/tweets'}> HERE </StyledLink> to see tweets.
      </StyledText>
    </Container>
  );
}
