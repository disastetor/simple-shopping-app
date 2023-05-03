import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { debounce } from '../utilities/debounce';
import { useShoppingCart } from '../context/ShoppingCartContext';

//Bootstrap elements
import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';

//Icons
import { ShoppingCart } from '../assets/icons';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const { openCart, cartQuantity } = useShoppingCart();
  //Function to hide navbar when scroll
  //Debounce is a utility helper that fires functions only once per user input
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <NavbarBs
      sticky="top"
      className="bg-white shadow-sm mb-3 "
      style={{ transition: 'top 0.6s', top: visible ? '0' : '-10%' }}
    >
      <Container>
        <Nav className="me-auto">
          {/* HOME */}
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>

          {/* STORE */}
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>

          {/* ABOUT */}
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={() => (cartQuantity > 0 ? openCart() : null)}
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <ShoppingCart />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(50%, -20%)',
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
export default Navbar;
