import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Header } from 'components/Header/Header';
import css from '../ContactsPage/ContactPage.module.css';

export default function ContactsPage() {
  return (
    <>
      <div className={css.contactPageWrapper}>
        <Header />
        <h1> Contacts</h1>
        <div className={css.contactsWrapper}>
          <ContactForm />
          <div>
            <Filter />
            <ContactList />
          </div>
        </div>
      </div>
    </>
  );
}
