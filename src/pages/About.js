import { Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useMemo } from 'react';

import { AboutContainer } from './About.style';

const About = () => {
  const contentTransitionProps = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { opacity: { delay: 0.5 } },
  }), []);

  return (
    <AboutContainer direction="row">
      <Grid container spacing={2} paddingLeft="10vw" paddingRight="10vw" {...contentTransitionProps}>
        <Grid item xs={4}>
          <Stack minHeight="100vh" justifyContent="center">
            <Typography variant="h1" color={grey[50]} fontWeight="500">
              Our Mission
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack minHeight="90vh" justifyContent="end">
            <Typography variant="h5" color={grey[50]} fontWeight="500" marginBottom="25px">
              Our goal at Zogx is to lead the way in developing cutting-edge robotic, automation, and Internet of Things (IoT) solutions. Whether you're a visionary start-up or a trailblazing industry titan, our products will effortlessly connect with your audience and motivate them to take worthwhile action.
            </Typography>
            <Typography variant="body1" color={grey[500]}>
              In the world of robotics, automation, and IoT, we create mobile-first experiences that engage your consumers by fusing cutting-edge design concepts with faultless code precision. We're your collaborators in reshaping the technology world, from giving business platforms particular personalities to creating rich experience interfaces.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About;
