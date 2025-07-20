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

      <Exibir text={"good"} valor={good} />
      <Exibir text={"neutral"} valor={neutral} />
      <Exibir text={"bad"} valor={bad} />
    </div>
  )
}

export default App