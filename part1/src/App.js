const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course}/>
      <Content exercises1={part1 + " " + exercises1 } exercises2={part2 + " " + exercises2} exercises3={part3 + " " + exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => {  
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part exercise={props.exercises1} />
      <Part exercise={props.exercises2} />
      <Part exercise={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return <p>{props.exercise}</p>
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}



export default App;
