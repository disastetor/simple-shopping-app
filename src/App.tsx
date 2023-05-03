import { Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';

//Bootstrap elements
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
