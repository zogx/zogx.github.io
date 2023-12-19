import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './Home';
import About from './About';

const App = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
    </Routes>
  </BrowserRouter>
);

export default App;
