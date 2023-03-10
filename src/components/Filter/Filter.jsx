import PropTypes from 'prop-types';

import { Label, SearchField } from './Filter.styled';

export const Filter = ({ searchQuery, updateFilter }) => {
  const handleChange = ({ target }) => {
    updateFilter(target.value);
  };

  return (
    <Label>
      Find contacts by name
      <SearchField
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={searchQuery}
        onChange={handleChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
