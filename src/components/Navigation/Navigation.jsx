import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../Logo/Logo';

import './Navigation.scss';

export default function Navigation() {
  return (<>
    <Navbar bg="light" variant="light">
      <Container >
        <Nav className="navbar-left">
          <Nav.Link href="#order">Сделать заказ</Nav.Link>
          <Nav.Link href="#sales">Скидки</Nav.Link>
        </Nav>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="navbar-right">
          <Nav.Link href="#shipping">Доставка</Nav.Link>
          <Nav.Link href="#payment">Оплата</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>)
}