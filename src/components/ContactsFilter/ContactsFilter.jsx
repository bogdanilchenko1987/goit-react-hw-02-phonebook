import PropTypes from 'prop-types';
import { Label, Input } from './ContactsFilter.styled';

export const ContactsFilter = ({ value, changeFilter }) => {
  return (
    <>
      <Label htmlFor="filter">
        Find contacts:
        <Input
          type="text"
          placeholder="Enter contact name"
          name="filter"
          value={value}
          onChange={changeFilter}
        />
      </Label>
    </>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
