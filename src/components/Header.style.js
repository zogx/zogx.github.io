import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.div)`
  position: fixed;
  top: 75px;
  left: 75px;
  cursor: pointer;
  z-index: 1500;
`;

export const HeaderTitle = styled(Typography)`
  color: ${grey[50]};
`;