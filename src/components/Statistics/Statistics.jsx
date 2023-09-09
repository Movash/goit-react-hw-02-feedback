import React from 'react';
import { StatBlock } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatBlock>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </StatBlock>
);

export default Statistics;

    // {options.map((option, index) => (
    //   <p key={index} name={option}>
    //     {option}: {state[option]}
    //   </p>
    // ))}