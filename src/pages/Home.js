import { Box, Stack } from '@mui/material';
import { useCallback } from 'react';

import Landscape from '../components/Landscape';
import { BodyContainer, BackgroundContainer, BodyDescription, TitleWord, DescriptionWord } from './Home.style';

const Home = () => {
  const titleTransitionProps = useCallback((index) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    scroll: { opacity: 0 },
    transition: { opacity: { delay: index * 0.5 } },
  }), []);
  const descriptionTransitionProps = useCallback((index) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { opacity: { delay: (index * 0.05) + 2.5 } },
  }), []);

  return (
    <Box>
      <BodyContainer direction="column" alignItems="center">
        <Stack direction="column" gap="25px">
          <Stack direction="row" paddingTop="25vh" zIndex="1">
            {
              'Vanguard of Innovation'.split(' ').map((word, index) => (
                <BodyDescription key={`word_${index}`} variant="h1" {...titleTransitionProps(index + 1)}>
                  {
                    Boolean(index) &&
                    <TitleWord>
                      &nbsp;
                    </TitleWord>
                  }
                  <TitleWord>
                    {word}
                  </TitleWord>
                </BodyDescription>
              ))
            }
          </Stack>
          <Stack direction="row" justifyContent="center" zIndex="1">
            {
              'committed to expanding the frontiers of technology'.split('').map((letter, index) => (
                <BodyDescription key={`letter_${index}`} variant="h4">
                  {
                    letter === ' '
                    ? <DescriptionWord {...descriptionTransitionProps(index + 1)}>
                      &nbsp;
                    </DescriptionWord>
                    : <DescriptionWord {...descriptionTransitionProps(index + 1)}>
                      {letter}
                    </DescriptionWord>
                  }
                </BodyDescription>
              ))
            }
          </Stack>
        </Stack>
      </BodyContainer>
      <BackgroundContainer position="fixed" width="100vw" height="100vh" top="0" left="0" justifyContent="center" zIndex="0">
        <Landscape />
      </BackgroundContainer>
    </Box>
  );
};

export default Home;
