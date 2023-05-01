import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
