import { Stack } from '@mui/material';
import { useCallback } from 'react';

import { BodyContainer, BodyDescription, DescriptionWord } from './Home.style';

const Home = () => {
  const titleTransitionProps = useCallback((index) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { opacity: { delay: index * 0.5 } },
  }), []);
  const descriptionTransitionProps = useCallback((index) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { opacity: { delay: (index * 0.05) + 1.5 } },
  }), []);

  return (
    <BodyContainer direction="column" justifyContent="center" alignItems="center" minHeight="80vh">
      <Stack direction="column" gap="25px">
        <Stack direction="row">
          {
            'Vanguard of Innovation'.split(' ').map((word, index) => (
              <BodyDescription key={`word_${index}`} variant="h1" {...titleTransitionProps(index + 1)}>
                {
                  Boolean(index) &&
                  <DescriptionWord>
                    &nbsp;
                  </DescriptionWord>
                }
                {
                  word.split('').map((letter, index) => (
                    <DescriptionWord key={`letter_${index}`}>
                      {letter}
                    </DescriptionWord>
                  ))
                }
              </BodyDescription>
            ))
          }
        </Stack>
        <Stack direction="row" justifyContent="start">
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
  );
};

export default Home;
