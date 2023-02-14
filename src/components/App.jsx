import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = storage.load('contactsToLS') ?? CONTACTS;
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== this.state.contacts) {
      storage.save('contactsToLS', contacts);
      console.log(contacts);
    }
  }

  onAddContact = contact => {
    if (this.state.contacts.some(cont => cont.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    const finalContact = {
      id: nanoid(4),
      ...contact,
    };
    this.setState({
      contacts: [finalContact, ...this.state.contacts],
    });
  };

  getFilteredContacts = () => {
    const filteredContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filteredContactsList;
  };

  handleDelete = event => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== event),
    }));
  };

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2> Contacts</h2>
        <Filter filter={filter} onFilter={this.handleFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
