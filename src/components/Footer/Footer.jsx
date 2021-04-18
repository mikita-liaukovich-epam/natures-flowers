import React from 'react';
import { Button, Container, Navbar, NavLink, Form } from 'react-bootstrap';

import ig from '../../assets/UI/instagram.png';
import vb from '../../assets/UI/viber.png';

import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <Container id="order">
        <h2>Оформите заказ по e-mail</h2>
        <Form action="mailto:mikita.liaukovich@gmail.com?subject=заказ цветов" method="POST" enctype="multipart/form-data">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Текст сообщения:</Form.Label>
            <Form.Control Control as="textarea" rows={4} type="text" placeholder="Хочу букет!" />
            <Button variant="primary" type="submit">
              Отправить
            </Button>
          </Form.Group>
        </Form>
        <h2>Или свяжитесь с нами через соцсети:</h2>
        <Navbar>
          <NavLink href="https://www.instagram.com/naturesflowers_by" target="_blank">
            <Button variant="light">
              <img src={ig}/>{" "}
              Instagram</Button>
          </NavLink>
          <NavLink href="tel:+375291276171" target="_blank">
            <Button variant="light">
              <img src={vb}/>{" "}
              Viber</Button>
          </NavLink>
        </Navbar>
      </Container>
    </footer>
  )
}