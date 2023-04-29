import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  LayoutStyled,
  FooterContainer,
  ContentContainer,
} from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <LayoutStyled>
      <ContentContainer>
        <Header />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutStyled>
  );
};

export default SharedLayout;
