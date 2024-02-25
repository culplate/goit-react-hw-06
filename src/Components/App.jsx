import { useState, useEffect } from "react";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactForm } from "./ContactForm/ContactForm";
import "./App.css";

function App() {
  const [contact, setContact] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );

    if (savedContacts !== null) {
      return savedContacts;
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contact))
  }, [contact]);

  // search logic
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };
  const filteredContacts = contact.filter((item) =>
    item.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  // adding contacts logic
  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  // deleting contacts logic
  const deleteContact = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((item) => item.id !== contactId);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox val={searchVal} onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
