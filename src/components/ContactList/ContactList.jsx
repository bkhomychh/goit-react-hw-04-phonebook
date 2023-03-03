import PropTypes from 'prop-types';

import { Contact } from 'components/Contact';

import { StyledList } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <Contact
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          key={id}
        />
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
