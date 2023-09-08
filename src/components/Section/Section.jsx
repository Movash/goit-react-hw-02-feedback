import React from 'react';
import { SectionCont } from './Section.styled';

const Section = ({ children, title }) => (
  <SectionCont>
    <h2>{title}</h2>
    {children}
  </SectionCont>
);

export default Section;
