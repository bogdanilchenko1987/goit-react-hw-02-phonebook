import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ filteredContacts, deleteContacts }) => {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContacts={deleteContacts}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContacts: PropTypes.func,
};
