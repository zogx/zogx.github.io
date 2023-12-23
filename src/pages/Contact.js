import { Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Chat } from '@mui/icons-material';

import { GridContainer, MenuMessageText, MessageIcon } from './Contact.style';

const Contact = () => {
  return (
    <GridContainer container paddingLeft="5vw" paddingRight="5vw">
      <Grid item xs={8}>
        <Stack>
          <Typography variant="h1" color={grey[50]} fontWeight="500" marginTop="25vh" marginBottom="25vh">
            let's talk
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" color={grey[50]} marginBottom="10px">
                Prabhaakar Sundararaj
              </Typography>
              <Typography variant="subtitle2" color={grey[400]}>
                Zogx Solutions,
              </Typography>
              <Typography variant="subtitle2" color={grey[400]}>
                Coimbatore.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Stack gap="10px">
                <Typography variant="subtitle1" color={grey[400]}>
                  About
                </Typography>
                <Typography variant="subtitle1" color={grey[400]}>
                  Projects
                </Typography>
                <Typography variant="subtitle1" color={grey[400]}>
                  Contact
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack>
          <Stack direction="row" alignItems="center" spacing={2} justifyContent="end" marginTop="30vh" marginBottom="25vh">
            <Stack>
              <MenuMessageText variant="h6">
                We are one click away
              </MenuMessageText>
              <MenuMessageText variant="subtitle2">
                Message us
              </MenuMessageText>
            </Stack>
            <MessageIcon><Chat /></MessageIcon>
          </Stack>
          <Stack alignItems="end" gap="10px">
            <Typography variant="subtitle2" color={grey[400]}>
              © 2023 Zogx
            </Typography>
            <Typography variant="subtitle2" color={grey[400]}>
              Privacy Policy
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </GridContainer>
  );
};

export default Contact;
