import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <ul className={css.contactList}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>
              <span className={css.contactInfo}>{contact.name}:</span>
              <span className={css.contactInfo}>{contact.number}</span>
              <button
                type="button"
                className={css.btnItemDel}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
