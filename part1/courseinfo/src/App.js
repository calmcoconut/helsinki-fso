import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Content = (props) => {
  console.log(props.allParts)
  return (
  <>
  <p>{props.allParts[0].name} {props.allParts[0].exercises}</p>
  <p>{props.allParts[1].name} {props.allParts[1].exercises}</p>
  <p>{props.allParts[2].name} {props.allParts[2].exercises}</p>
  </>
  )
}

const Total = (props) => {
  return (
  <>
    <p>Number of exercises {props.allParts[0].exercises + props.allParts[1].exercises + props.allParts[2].exercises}</p>
  </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises:10
  },
  {
  name : 'Using props to pass data',
  exercises : 7
  },
  {
  name : 'State of a component',
  exercises : 14
  }
]

  return (
    <div>
      <Header header={course} />
      <Content allParts={parts}/>
      <Total allParts={parts} />
    </div>
  )
}

export default App;
