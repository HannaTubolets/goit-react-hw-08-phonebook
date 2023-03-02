// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
