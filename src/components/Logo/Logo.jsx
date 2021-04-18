import React from 'react';
import logo from '../../assets/logo/logo.png'
import dict from '../../utils/getDict';
import {ReactComponent as Flower} from '../../assets/logo/lotus-flower.svg';

import './Logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <Flower className="logo-flower"/>
      <img src={logo} alt="Nature's Flowers"/>
      <p className="logo-subtitle">{dict.ПОДПИСЬ_ЛОГО}</p>
    </div>
  )
}