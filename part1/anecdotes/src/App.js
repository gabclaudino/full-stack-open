import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
  console.log("arry de votos:", votes)

  const copy = [...votes]
  console.log("array copia:", copy)

  const getRandomNumber = (min, max) => {
    const num = Math.floor(Math.random() * (max - min) + min)
    console.log("numero aleatorio:", num)
    return num
  }

  const voteAnecdote = (num) => {
    copy[num]++
    setVote(copy)
  }

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>

      <button onClick={() => voteAnecdote(selected)}>vote</button>
      <button onClick={() => setSelected(getRandomNumber(0, anecdotes.length))}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[mostVoted]}
      </p>

    </div>
  )
}

export default App