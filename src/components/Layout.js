import Header from './Header';
import Menu from './Menu';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      {children}
    </>
  );
};

export default Layout;
