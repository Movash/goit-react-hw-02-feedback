import { StatBlock } from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage, state }) => (
  <StatBlock>
    {options.map((option, index) => (
      <p key={index} name={option}>
        {option}: {state[option]}
      </p>
    ))}
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </StatBlock>
);

export default Statistics;