import { useState } from 'react'

const Botao = (props) => {
  return (
    <div>
      <button onClick={props.func}>
        {props.text}
      </button>
    </div>
  )
}

const Exibir = (props) => {
  return (
    <div>
      {props.text} {props.valor}
    </div>
  )
}

const Statistics = (props) => {
  let average
  let positives
  if (!props.good && !props.neutral && !props.bad) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  else {
    average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)
    positives = (props.good / (props.good + props.neutral + props.bad)) * 100
  }

  return (
    <div>
      <Exibir text={"good"} valor={props.good} />
      <Exibir text={"neutral"} valor={props.neutral} />
      <Exibir text={"bad"} valor={props.bad} />

      <Exibir text={"all"} valor={props.good + props.bad + props.neutral} />
      <Exibir text={"average"} valor={average} />
      <Exibir text={"positive"} valor={positives + "%"} />
    </div>
  )




}

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const aumentarGood = (novoValor) => () => {
    setGood(novoValor)
    console.log("novo valor de good:", novoValor)
  }

  const aumentarNeutral = (novoValor) => () => {
    setNeutral(novoValor)
    console.log("novo valor de neutral:", novoValor)
  }

  const aumentarBad = (novoValor) => () => {
    setBad(novoValor)
    console.log("novo valor de bad:", novoValor)
  }


  return (
    <div>
      {/* <Botao func={aumentarGood(good + 1)} text={"good"} />
      <Botao func={aumentarNeutral(neutral + 1)} text={"neutral"} />
      <Botao func={aumentarBad(bad + 1)} text={"bad"} /> */}

      <h1>give feedbacks</h1>

      <button onClick={aumentarGood(good + 1)}>good</button>
      <button onClick={aumentarNeutral(neutral + 1)}>neutral</button>
      <button onClick={aumentarBad(bad + 1)}>bad</button>

      <h1>statistics</h1>

      {/* <Exibir text={"good"} valor={good} />
      <Exibir text={"neutral"} valor={neutral} />
      <Exibir text={"bad"} valor={bad} />

      <Exibir text={"all"} valor={good + bad + neutral} />
      <Exibir text={"average"} valor={average} />
      <Exibir text={"positive"} valor={positives + "%"} /> */}

      <Statistics good={good} neutral={neutral} bad={bad} />



    </div>
  )
}

export default App