import { Component } from 'react';
import PropTypes from 'prop-types';

import { Label, SearchField } from './Filter.styled';

export class Filter extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleChange = ({ target }) => {
    this.props.onChange(target.value);
  };

  render() {
    const { searchQuery } = this.props;

    return (
      <Label>
        Find contacts by name
        <SearchField
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={searchQuery}
          onChange={this.handleChange}
        />
      </Label>
    );
  }
}
