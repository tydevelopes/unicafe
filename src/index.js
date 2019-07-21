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
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={totalClicks} />
      <Statistic text="average" value={Number.parseFloat(average).toFixed(1)} />
      <Statistic
        text="positive"
        value={Number.parseFloat(positive).toFixed(1) + '%'}
      />
    </>
  ) : (
    <tr>
      <td>'No feedback given'</td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Statistics</th>
        </tr>
      </thead>
      <tbody>{renderStats}</tbody>
    </table>
  );
};

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

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
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
