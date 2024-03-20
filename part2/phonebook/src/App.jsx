import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number:'35856145' }
  ])
  const [newName, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    event.preventDefault()
    const personObject = {
      name: newName,
      number:newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }
  const personsToShow = showAll ? persons : persons.filter(persons => persons.name);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
         </ul>

    </div>
  )
}

export default App