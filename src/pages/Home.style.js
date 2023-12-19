import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import { motion } from 'framer-motion';

export const BodyContainer = styled(Stack)``;

export const BodyDescription = styled(motion(Typography))`
  color: ${grey[50]};
  font-weight: 500;
`;

export const DescriptionWord = styled(motion.span)`
  &:hover {
    color: ${yellow[500]};
  }
`;