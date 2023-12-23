import styled from '@emotion/styled';
import { Grid, Icon, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const GridContainer = styled(Grid)`
  background: linear-gradient(to bottom, #0f172c 20%, #0f172c, #0f172cf9);
  min-height: 100vh;
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
  &:hover {
    background-color: ${blue[500]};
  }
`;
