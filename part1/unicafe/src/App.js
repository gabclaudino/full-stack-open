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

const StatisticLine = (props) => {
  return (
    <div>
      <table>
        <td>
          {props.text}
        </td>
        <td>
          {props.valor}
        </td>
      </table>
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
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.good + props.bad + props.neutral}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positives</td>
          <td>{positives}%</td>
        </tr>
      </tbody>
    </table>
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
      <h1>give feedbacks</h1>

      <Botao func={aumentarGood(good + 1)} text={"good"} />
      <Botao func={aumentarNeutral(neutral + 1)} text={"neutral"} />
      <Botao func={aumentarBad(bad + 1)} text={"bad"} />

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App