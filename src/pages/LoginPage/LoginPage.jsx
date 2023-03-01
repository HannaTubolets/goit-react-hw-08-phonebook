import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <form
      className={css.loginForm}
      // onSubmit={handelSubmit}
    >
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
}
