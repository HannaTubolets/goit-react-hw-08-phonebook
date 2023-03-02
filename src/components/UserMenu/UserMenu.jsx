import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button
        className={css.btnLogout}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
