import React, { useState, useEffect } from 'react'
import { Nav, NavLink, Navbar, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Home from '../Pages/Home'
import Photos from '../Pages/Photos'

function Header() {
  const [albumsArr, setAlbumsArr] = React.useState([])
  const [photosArr, setPhotosArr] = React.useState([])
  const [selectedAlb, setSelectedAlb] = React.useState(1)

  // useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
    setPhotosArr(res.data)

    setAlbumsArr(
      res.data.reduce((result, item) => {
        return result.includes(item.albumId)
          ? result
          : [...result, item.albumId]
      }, [])
    )
  })
  //})

  function selectAlbum(num) {
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
          <Route
            path="/"
            element={<Home albumsArr={albumsArr} selectAlbum={selectAlbum} />}
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
