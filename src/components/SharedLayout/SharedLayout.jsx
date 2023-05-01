import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';
import {
  LayoutStyled,
  FooterContainer,
  ContentContainer,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutStyled>
      <ContentContainer>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutStyled>
  );
};

export default SharedLayout;
