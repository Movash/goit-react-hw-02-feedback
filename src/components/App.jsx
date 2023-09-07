import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prev => ({ [option]: prev[option] + 1 }));
  };

  render() {
    const options = ['good', 'neutral', 'bad'];
    const way = this.state;
    const countTotalFeedback =
      way.good + way.neutral + way.bad;
    const countPositiveFeedbackPercentage =
      countTotalFeedback > 0
        ? ((way.good / countTotalFeedback) * 100).toFixed(0)
        : 0;
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {countTotalFeedback ? (
            <Statistics
              options={options}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
              state={way}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </>
    );
  }
}
