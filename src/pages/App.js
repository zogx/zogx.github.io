import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  </BrowserRouter>
);

export default App;
