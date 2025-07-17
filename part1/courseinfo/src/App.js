
const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}


const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part1} ex={props.exs1} />
      <Part part={props.part2} ex={props.exs2} />
      <Part part={props.part3} ex={props.exs3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.exs1 + props.exs2 + props.exs3}
      </p>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      {props.part} {props.ex}
    </div>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exs1={exercises1} part2={part2} exs2={exercises2} part3={part3} exs3={exercises3} />
      <Total exs1={exercises1} exs2={exercises2} exs3={exercises3} />
    </div>
  )
}

export default App