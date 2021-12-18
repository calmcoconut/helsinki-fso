import React, { useState } from 'react'

const Button = ( {handle, text} ) => (
  <button onClick={handle}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const incrementVote = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
    let m = 0
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > copy[m]) m = i
    }
    console.log("most votes to index ", m)
    setMostVotes(m)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handle = {() => incrementVote()} text="vote" /> 
      <Button handle = {() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />

      <h1>Anecdote of with most votes </h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
    </div>
  )
}


export default App;
