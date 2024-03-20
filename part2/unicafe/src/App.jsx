import { useState } from 'react'
const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  );
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    const updatedTotal = total + 1
    setAverage((updatedGood*1+bad*(-1))/updatedTotal)
    setPositive(updatedGood*100/updatedTotal)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setPositive(good*100/updatedTotal)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
    const updatedTotal = total + 1
    setAverage((good*1+updatedBad*(-1))/updatedTotal)
    setPositive(good*100/updatedTotal)
  }

  const Statistics = () => {
    if (total === 0) {
      return <div>No feedback given</div>;
    }
    return (
      <div>
        <h2>statistics</h2>
        <StatisticLine text="good"value={good}/>
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    );
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Statistics />
    </div>
  );
};
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
export default App;