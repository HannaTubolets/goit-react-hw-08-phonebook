import { useState, useEffect } from 'react';
import storage from 'helpers/storage';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(
    () => storage.load('contactsToLS') ?? CONTACTS
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save('contactsToLS', contacts);
  }, [contacts]);

  const onAddContact = contact => {
    const finalContact = {
      id: nanoid(4),
      ...contact,
    };

    contacts.some(cont => cont.name === contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : setContacts(prevState => [finalContact, ...prevState]);
  };
  console.log(contacts);

  const getFilteredContacts = () => {
    console.log(filter);
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  console.log(getFilteredContacts());

  const handleDelete = event => {
    setContacts(prevState => prevState.filter(contact => contact.id !== event));
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2> Contacts</h2>
      <Filter filter={filter} onFilter={handleFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </div>
  );
}
