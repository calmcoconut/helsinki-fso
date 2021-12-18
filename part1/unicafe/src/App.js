import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) => (
  <tr>
  <td>{text} {value}</td>
  </tr>
)

const Statistics = ({good,neutral,bad}) => {
  console.log(good)
  const getAvg = () => ((good-bad)/(good+bad+neutral)).toFixed(1)
  const getPositive = () => ((good)/(good+bad+neutral) * 100).toFixed(1)

  const statsMessage = () => {
    if (good+bad+neutral === 0) return (<p>No feedback given</p>)
    return (
      <>
        <table>
          <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good+neutral+bad} />
          <StatisticsLine text="average" value={getAvg()} />
          <StatisticsLine text="positive" value={getPositive()} />
          </tbody>
        </table>
      </>
    )
  }

  return (
  <>
    {statsMessage()}
  </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
