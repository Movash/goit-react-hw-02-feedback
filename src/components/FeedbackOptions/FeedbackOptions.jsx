import { Buttons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Buttons>
    {options.map((option, index) => (
      <button key={index} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </Buttons>
);

export default FeedbackOptions;
