import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import SearchInput from './components/SearchInput';

function App() {

  const [userFormVisible, setUserFormVisible] = useState(false)



  return (
    <div className="App">
      <Header />
      <SearchInput setUserFormVisible={setUserFormVisible} userFormVisible={userFormVisible} />
      {userFormVisible && <AddContact setUserFormVisible={setUserFormVisible} />}
      <ContactList />

    </div>
  );
}

export default App;
