import { useState, useEffect } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import SearchInput from './components/SearchInput';

function App() {

  const [userFormVisible, setUserFormVisible] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="App">
      <Header />
      <SearchInput setUserFormVisible={setUserFormVisible} userFormVisible={userFormVisible} filterValue={filterValue} setFilterValue={setFilterValue} contacts={contacts} />
      {userFormVisible && <AddContact setUserFormVisible={setUserFormVisible} contacts={contacts} setContacts={setContacts} />}
      <ContactList contacts={contacts.filter(contact => contact.firstName.toLowerCase().includes(filterValue.toLowerCase()) || contact.lastName.toLowerCase().includes(filterValue.toLowerCase()))} setContacts={setContacts} />

    </div>
  );
}

export default App;
