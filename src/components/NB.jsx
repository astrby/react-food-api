import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NB = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">TodoRecetas</Navbar.Brand>
          <Nav>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NB