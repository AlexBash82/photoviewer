import React, { useState } from 'react'
import { Nav, NavLink, Navbar, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from '../Pages/Home'
import Photos from '../Pages/Photos'

function Header({ photosArr, albumsArr }) {
  const [selectedAlb, setSelectedAlb] = useState(1)

  function selectAlb(num) {
    setSelectedAlb(num)
  }
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
                  Albums
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={<Home selectAlb={selectAlb} albumsArr={albumsArr} />}
          />
          <Route
            path="/photos"
            element={<Photos photosArr={photosArr} selectedAlb={selectedAlb} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default Header
