import { ThreeDots } from 'react-loader-spinner';
import { Backdrop, LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <LoaderWrapper>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#471CA9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderWrapper>
    </Backdrop>
  );
};
export default Loader;
