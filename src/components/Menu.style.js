import styled from '@emotion/styled';
import { Box, Drawer, Icon, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { motion } from 'framer-motion';

export const MenuIconContainer = styled(motion.div)`
  position: fixed;
  top: 75px;
  right: 75px;
  cursor: pointer;
  z-index: 1500;
`;

export const MenuIcon = styled(Icon)`
  color: ${grey[50]};
`;

export const MenuDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    background-color: transparent;
  }
`;

export const MenuNavText = styled(motion(Typography))`
  color: ${grey[50]};
  text-align: right;
  width: 100%;
  padding-right: 65px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${blue[500]};
  }
`;

export const MenuMessageText = styled(Typography)`
  color: ${({ variant }) => variant === 'subtitle2' ? grey[400] : grey[50]};
  text-align: right;
  cursor: pointer;
`;

export const MessageIcon = styled(Icon)`
  color: ${grey[50]};
  background-color: ${grey[700]};
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
`;

export const MessageContainer = styled(motion(Box))`
  padding: 10px 65px 10px 10px;
  &:hover {
    background-color: ${blue[900]};
    border-radius: 5px; 
  }
`;
