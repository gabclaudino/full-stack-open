import { useState, useSyncExternalStore, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promisse fulfilled')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length, 'persons')


  let id = persons.length

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [filter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
      id: ++id
    }

    const hasName = persons.some(person => person.name === newPerson.name)
    if (hasName) {
      alert(`${newPerson.name} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))
    setNewNumber('')
    setNewName('')
  }

  const personsToShow = filter.length == 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add new</h3>
      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      {personsToShow.map(person => {
        return <Person person={person} key={person.id} />
      })}
    </div>
  )
}

export default App