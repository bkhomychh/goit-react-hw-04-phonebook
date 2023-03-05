import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { saveDataToStorage, getDataFromStorage } from 'helpers/storage';

import { Container, Title, Heading } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = getDataFromStorage('contacts');
    const contacts = data ? data : [];

    this.setState({ contacts });
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (prevContacts === currentContacts) {
      return;
    }

    saveDataToStorage('contacts', this.state.contacts);
  }

  addContact = ({ name, number }) => {
    const isNew = !this.checkContactExistence(name);

    if (!isNew) {
      alert(name + ' is already in contacts.');
      return isNew;
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return {
        contacts: [...contacts, newContact],
      };
    });

    return isNew;
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  checkContactExistence = name => {
    const formattedName = name.toLowerCase();

    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === formattedName
    );
  };

  updateState = searchQuery => {
    this.setState({ filter: searchQuery });
  };

  render() {
    const { contacts, filter } = this.state;

    const formattedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(formattedFilter)
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Heading>Contacts</Heading>
        <Filter searchQuery={filter} onChange={this.updateState} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
