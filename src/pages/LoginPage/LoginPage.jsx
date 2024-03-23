import styles from '../../components/Phonebook/Phonebook.module.css';
import InputField from '../../components/common/InputField/InputField';
import FallbackLoader from '../../components/common/FallbackLoader/FallbackLoader';
import AddContactBtn from '../../components/common/AddContactBtn/AddContactBtn';
import useAuth from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useAuth();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(logIn({ email, password }));

    form.reset();
  };

  if (isLoading) {
    return <FallbackLoader>Login...</FallbackLoader>;
  }

  return (
    <section className={styles.authSection}>
      <div className={styles.phonebook}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <InputField type="email" name="email" />
          <InputField type="password" name="password" />

          <AddContactBtn text="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
