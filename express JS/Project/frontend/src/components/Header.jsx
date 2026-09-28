import React from 'react';
import { AiTwotoneShop } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router';

function Header() {
  return (
    <header>
      <Navbar expand="md" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as ={NavLink} to="/" className="d-flex align-items-center gap-2">
            <AiTwotoneShop size={28} />
            <span>Himalaya Shop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as ={NavLink} to="/cart"
              >
                <LuShoppingCart size={20} />
                Cart
              </Nav.Link>

              {/* Login */}
              <Nav.Link as ={NavLink} to="/login"
              >
                <FaRegUser size={18} />
                Login
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
}

export default Header;