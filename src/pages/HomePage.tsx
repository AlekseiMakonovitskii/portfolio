import React from 'react';
import Main from '../coreComponents/Main';
import Container from '../coreComponents/Container';
import About from '../components/About';

function HomePage() {
  return (
    <Main>
      <Container>
        <About/>
      </Container>
    </Main>
  );
}

export default HomePage;
