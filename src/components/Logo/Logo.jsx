import React from 'react';
import logo from '../../assets/logo/logo.png'
import dict from '../../utils/getDict';

import './Logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Nature's Flowers"/>
      <p className="logo-subtitle">{dict.ПОДПИСЬ_ЛОГО}</p>
    </div>
  )
}