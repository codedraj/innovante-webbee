import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import {
  Contact,
  // Contact,
  // DemoPages,
  Features,
  Footer,
  Hero,
  Highlights,
  Main,
  Partners,
  Process,
  Services,
} from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Highlights />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container paddingX={'0 !important'} maxWidth={'100%'}>
          <Services />
        </Container>
      </Box>
      <Container>
        <Partners />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Features />
        </Container>
      </Box>
      <Container>
        <Process />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Main />
        </Container>
      </Box>
      <Box>
        <Contact />
      </Box>
      <Box>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
