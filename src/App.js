import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
  let [first5, setFirst5] = useState(contacts.splice(0, 5))
  let [restOfContacts, setRestOfContacts] = useState(contacts)

  const DisplayFirst5 = () => {
    return first5.map(eachContact => {
      return (
        <tr key={eachContact.id}>
          <td><img style={{ width: '50px' }} src={eachContact.pictureUrl} alt="" /></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <td><button onClick={deleteContact} className="delete">Delete</button></td>
        </tr>
      )
    })
  }

  const getRandomContact = () => {
    let copyFirst5 = [...first5]
    let copyRestOfContacts = [...restOfContacts]

    let randomNum = Math.floor(Math.random() * restOfContacts.length)
    let randomContact = restOfContacts[randomNum]

    copyFirst5.push(randomContact)
    copyRestOfContacts.splice(randomNum, 1)
    setFirst5(copyFirst5)
    setRestOfContacts(copyRestOfContacts)
  }

  const sortByName = () => {
    let copyFirst5 = [...first5]

    copyFirst5.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else {
        return 1
      }
    });

    setFirst5(copyFirst5)
  }

  const sortByPopularity = () => {
    let copyFirst5 = [...first5]

    copyFirst5.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      } else {
        return -1
      }
    });

    setFirst5(copyFirst5)
  }

  const deleteContact = index => {
    let copyFirst5 = [...first5]

    copyFirst5.splice(index, 1)
    setFirst5(copyFirst5)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div class="body">
        <button onClick={getRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort By Name</button>
        <button onClick={sortByPopularity}>Sort By Popularity</button>
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <DisplayFirst5 />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;