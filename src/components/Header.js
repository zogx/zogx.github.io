import { useNavigate } from 'react-router-dom';

import { HeaderContainer, HeaderTitle } from './Header.style';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderTitle variant="h4" onClick={() => navigate('/')}>
        zogx
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
