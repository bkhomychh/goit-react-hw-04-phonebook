import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { saveDataToStorage, getDataFromStorage } from 'helpers/storage';

import { Container, Title, Heading } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = getDataFromStorage('contacts');
    return data ? data : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    saveDataToStorage('contacts', contacts);
  }, [contacts]);

  const checkContactExistence = name => {
    const formattedName = name.toLowerCase();

    return contacts.some(
      contact => contact.name.toLowerCase() === formattedName
    );
  };

  const addContact = ({ name, number }) => {
    const isNew = !checkContactExistence(name);

    if (!isNew) {
      alert(name + ' is already in contacts.');
      return isNew;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, newContact]);
    return isNew;
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />
      <Heading>Contacts</Heading>
      <Filter searchQuery={filter} updateFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
