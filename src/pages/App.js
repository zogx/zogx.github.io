import { Box } from '@mui/material';
import Body from '../components/Body';
import Header from '../components/Header';
import Menu from '../components/Menu';

const App = () => (
  <Box width="100vw" height="100vh" backgroundColor="#0f172c" p="0px">
    <Header />
    <Menu />
    <Body />
  </Box>
);

export default App;
