import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';

export const AboutContainer = styled(motion(Stack))`
  background: linear-gradient(to bottom, #0f172c 20%, #0f172c, #0f172cf9);
  min-height: 100vh;
`;
