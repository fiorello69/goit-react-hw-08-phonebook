import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import useAuth from '../../hooks/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <section className={styles.homePage}>
      <h1>My digital contacts book</h1>

      {isLoggedIn ? (
        <p>
          You are logged in. Now you can access your contact list from the
          navigation bar, or by clicking here:
          <Link to="contacts">Contacts</Link>
        </p>
      ) : (
        <p className={styles.notLoggedIn}>
          <span>
            This app help you to organize your contacts, add, delete, or check
            and is available from all your digital devices.
          </span>
          <span>
            In order to acces it, you'll need to register (click:{' '}
            <Link to="register">Register</Link>), or log in (click:{' '}
            <Link to="login">Login</Link>).
          </span>
        </p>
      )}
    </section>
  );
};

export default HomePage;
