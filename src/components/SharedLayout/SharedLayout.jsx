import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import {
  LayoutStyled,
  FooterContainer,
  ContentContainer,
} from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

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
      <Toaster position="bottom-left" reverseOrder={false} />
    </LayoutStyled>
  );
};

export default SharedLayout;
