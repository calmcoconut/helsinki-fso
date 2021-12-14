import React from "react";

// reusable components can be used in our App funct (analogous to main) with <func /> syntax
const Hello = (props) => { // pass an argument using props
  return (
    <div>
      <p>Hello world</p>
      <p>Hello, {props.name}, are your {props.age} years old?</p>
    </div>
  )
}

// react component with the name App
const App = () => { 
  console.log("hello from component")
  const now = new Date()
  const a = 10
  const b = 20
  return  ( // anon function 
  <div>
    <p>Hello world</p>
    <p>Hello world, it is {now.toString()}</p>
    <p>also, {a} plus {b} is {a+b}</p>
    <Hello name="Alex" age={a}/>
  </div>
)
}

export default App;
