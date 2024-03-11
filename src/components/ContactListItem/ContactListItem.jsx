import PropTypes from 'prop-types';
import { Button, ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, deleteContacts }) => {
  return (
    <ListItem key={id}>
      {name} : {number}
      <Button type="button" onClick={() => deleteContacts(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
