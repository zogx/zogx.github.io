import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import { motion } from 'framer-motion';

export const BodyContainer = styled(Stack)`
  background: linear-gradient(to bottom, #0f172c 20%, #0f172c, #0f172cf9);
  min-height: 100vh;
`;

export const BackgroundContainer = styled(Stack)``;

export const BodyDescription = styled(motion(Typography))`
  color: ${grey[50]};
  font-weight: 500;
`;

export const TitleWord = styled(motion.span)`
  &:hover {
    color: ${yellow[500]};
  }
`;

export const DescriptionWord = styled(motion.span)`
  color: ${grey[500]};
`;