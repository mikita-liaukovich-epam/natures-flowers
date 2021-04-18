import React from 'react';
import { Container } from 'react-bootstrap'
import Leaf from '../Leaf/Leaf';
import {ReactComponent as Spiral} from '../../assets/UI/spiral.svg';

import './Section.scss';

export default function Section({id, title, text, label, right = false}) {
  return (
    <Container id={id} className={`section section-leaf section-leaf_${right ? "right" : "left"}`}>
      <Leaf title={title} text={text} right={right}
      />
      { label && <>
        <Spiral className="section-spiral"/>
        <h2 className={`section-label section-label_${right ? 'right' : 'left'}`}>{label}</h2>
      </>}
    </Container>
  )
}