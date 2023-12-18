import { useMemo, useState } from 'react';
import { Menu as IMenu, Close, Chat } from '@mui/icons-material';
import { Box, List, ListItem, Stack } from '@mui/material';

import { MenuIconContainer, MenuIcon, MenuDrawer, MenuNavText, MenuMessageText, MessageIcon, MessageContainer } from './Menu.style';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navTransitionProps = useMemo(() => ({
    initial: { x: -100 },
    animate: { x: 0 },
    transition: { x: { delay: 0.3, type: 'tween' } },
  }), []);

  return (
    <>
      <MenuIconContainer
        onClick={() => setIsOpen(o => !o)}
        whileInView={isOpen ? { scale: 1 } : { rotate: 360 }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.5 }}
      > 
        <MenuIcon>
          {isOpen ? <Close /> : <IMenu />}
        </MenuIcon>
      </MenuIconContainer>
      <MenuDrawer anchor="right" open={isOpen}>
        <Box width="25vw">
          <List>
            <ListItem><Box height="25vh" /></ListItem>
            <ListItem>
              <MenuNavText variant="h2" gutterBottom {...navTransitionProps}>
                About
              </MenuNavText>
            </ListItem>
            <ListItem>
              <MenuNavText variant="h2" gutterBottom {...navTransitionProps}>
                Projects
              </MenuNavText>
            </ListItem>
            <ListItem>
              <MenuNavText variant="h2" gutterBottom {...navTransitionProps}>
                Contact
              </MenuNavText>
            </ListItem>
            <ListItem><Box height="10vh" /></ListItem>
            <ListItem>
              <MessageContainer
                width="100%"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: { delay: 0.9 } }}
              >
                <Stack direction="row" alignItems="center" spacing={2} justifyContent="end">
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
              </MessageContainer>
            </ListItem>
          </List>
        </Box>
      </MenuDrawer>
    </>
  );
};

export default Menu;
