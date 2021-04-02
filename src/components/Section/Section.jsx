import React from 'react';
import { Badge, Container } from 'react-bootstrap'
import Leaf from '../Leaf/Leaf';

import './Section.scss';

export default function Section({title, text, label, right = false}) {
  return (
    <Container className={`section section-leaf section-leaf_${right ? "right" : "left"}`}>
      <Leaf title={title} text={text} right={right}
      />
      { label && 
        <h2 className={`section-label section-label_${right ? 'right' : 'left'}`}>{label}</h2>
      }
    </Container>
  )
}