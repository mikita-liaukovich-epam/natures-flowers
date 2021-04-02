import React from 'react';

import './Leaf.scss';

export default function Leaf({title, text, right = false}) {
  return (
    <div className={`leaf-wrapper leaf-wrapper_${right ? 'right' : 'left'}`}>
      <div className="leaf">
        {title && <h1>{title}</h1>}
        <p dangerouslySetInnerHTML={{__html: text}}></p>
      </div>
    </div>
  )
}