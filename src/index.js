import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistics = ({ good, neutral, bad }) => {
  // calcutions
  const totalClicks = good + neutral + bad;
  const average = totalClicks && (good - bad) / totalClicks;
  const positive = totalClicks && (good / totalClicks) * 100;
  const renderStats = totalClicks ? (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalClicks}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
  ) : (
    'No feedback given'
  );

  return (
    <div>
      <h2>Statistics</h2>
      {renderStats}
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // click handlers
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
