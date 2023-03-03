import PropTypes from 'prop-types';

import { Item, Name, Number, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Name>{name}: </Name>
      <Number>{number}</Number>
      <DeleteBtn
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
