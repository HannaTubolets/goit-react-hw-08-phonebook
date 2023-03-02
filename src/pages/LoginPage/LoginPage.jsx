import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';
import css from './LoginPage.module.css';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    dispatch(login(user));
    event.target.reset();
  };
  return (
    <div className={css.container}>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <label className={css.loginFormLabel}>Email </label>
        <input
          className={css.loginFormEmail}
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="on"
        />
        <label className={css.loginFormLabel}>Password</label>
        <input
          className={css.loginFormPassword}
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="on"
        />
        <button className={css.loginFormBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
