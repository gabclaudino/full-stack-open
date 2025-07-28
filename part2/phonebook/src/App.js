import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [filter, setNewFilter] = useState('')

  const [notification, setNotification] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService.
      getAll()
      .then((response) => {
        console.log('promisse fulfilled')
        setPersons(response)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
      number: newNumber
    }

    const hasName = persons.some(person => person.name === newPerson.name)
    if (hasName) {
      if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
        console.log(persons.find(p => p.name === newPerson.name))
        personService
          .updatePerson(persons.find(p => p.name === newPerson.name).id, newPerson)
          .then(returnedPerson => {
            setNotification(`Updated ${newPerson.name}`)
            setTimeout(() => {
              setNotification(null)
            }, 5000)
            setPersons(persons.map(p => p.name !== newPerson.name ? p : returnedPerson))
          })
          .catch(error => {
            setErrorMessage(`${newPerson.name} was already deleted from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.name !== newPerson.name))
          })
      }
      return
    }

    personService
      .createPerson(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewNumber('')
        setNewName('')
      })

    setNotification(`Added ${newPerson.name}`)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const personsToShow = filter.length == 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const deleteP = (id) => {
    const person = persons.find(user => user.id == id)
    if (window.confirm(`Are you sure you want to delete ${person.name}`)) {
      personService.deletePerson(id)
        .then(returnedPerson => {
          setNotification(`Deleted ${person.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          setPersons(persons.filter(p => p.id != id))
        })
        .catch(error => {
          setErrorMessage(`this person was already deleted from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id != id))
        })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <ErrorMessage errorMessage={errorMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add new</h3>
      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      {personsToShow.map(person => {
        return <Person person={person} deleteP={() => deleteP(person.id)} key={person.id} />
      })}
    </div>
  )
}

export default App