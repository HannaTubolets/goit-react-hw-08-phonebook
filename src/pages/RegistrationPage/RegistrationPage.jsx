import { register } from 'redux/user/operations';
import { useDispatch } from 'react-redux';
import css from './RegistrationPage.module.css';

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(user);
    dispatch(register(user));
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <label className={css.loginFormLabel}>Name </label>
      <input
        className={css.loginFormEmail}
        type="text"
        name="name"
        placeholder="Enter your name"
      />
      <label className={css.loginFormLabel}>Email </label>
      <input
        className={css.loginFormEmail}
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <label className={css.loginFormLabel}>Password</label>
      <input
        className={css.loginFormPassword}
        type="password"
        name="password"
        placeholder="Enter password"
      />
      <button className={css.loginFormBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegistrationPage;
