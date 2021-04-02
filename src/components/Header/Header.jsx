import React from 'react';
import { Badge, Container } from 'react-bootstrap'
import Leaf from '../Leaf/Leaf';
import Logo from '../Logo/Logo' 
import Navigation from '../Navigation/Navigation';

import './Header.scss';

export default function Header() {
  return (
    <header id="home">
      <Navigation />
    </header>
  )
}