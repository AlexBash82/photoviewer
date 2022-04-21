import React from 'react'
import { Nav, NavLink, Navbar, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from '../Pages/Home'
import Photos from '../Pages/Photos'

function Header() {
  return (
    <div>
      <Router>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink as={Link} to="/">
                  Home
                </NavLink>
                <NavLink as={Link} to="/photos">
                  Photos
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Header
