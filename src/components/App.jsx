import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notifikation/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"]

  const onLeaveFeedback = (event) => {
    const targetName = event.target.name
    
    if(targetName === "good"){
      setGood(good + 1)
    }
    else if(targetName === "neutral") {
      setNeutral(neutral + 1)
    }
    else if(targetName === "bad") {
      setBad(bad + 1)
    }
  };
  
  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = (totalFeedback) => {

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };


  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback = {onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())}
        />
        ) : (
        <Notification
          title="There is no feedback"
        />
        )}
      </Section>
    </>
  );
};
