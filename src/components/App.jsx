import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notifikation/Notification";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback() {
    const {good, neutral, bad} = this.state
    let total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };

  render () {
    const { good, neutral, bad } = this.state
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(countTotalFeedback);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback = {this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
            {countTotalFeedback ? (
            <Statistics
              good = {good}
              neutral = {neutral}
              bad = {bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
            ) : (
            <Notification
              title="There is no feedback"
            />
            )}
        </Section>
      </>
    
    );
  }
};
