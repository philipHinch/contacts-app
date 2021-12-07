import { useState, useEffect } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import SearchInput from './components/SearchInput';

function App() {

  const [userFormVisible, setUserFormVisible] = useState(false)
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className="App">
      <Header />
      <SearchInput setUserFormVisible={setUserFormVisible} userFormVisible={userFormVisible} />
      {userFormVisible && <AddContact setUserFormVisible={setUserFormVisible} contacts={contacts} setContacts={setContacts} />}
      <ContactList contacts={contacts} setContacts={setContacts} />

    </div>
  );
}

export default App;
