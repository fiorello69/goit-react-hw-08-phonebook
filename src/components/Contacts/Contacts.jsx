import styles from './Contacts.module.css';
import FilterContactsInput from '../../components/FilterContactsInput/FilterContactsInput';
import ContactsList from '../../components/ContactList/ContactsList';
import Loader from '../../components/common/Loader/Loader';

import useContacts from '../../hooks/useContacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ErrorAlert from '../../components/common/ErrorAlert/ErrorAlert';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = useContacts();
  const Error_Message = `The contact list cannot be loaded due to the following error: ${error} `;

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <FilterContactsInput />

      {isLoading && <Loader />}
      {error && <ErrorAlert error={Error_Message} />}
      {!isLoading && !error && <ContactsList />}
    </div>
  );
};

export default Contacts;
