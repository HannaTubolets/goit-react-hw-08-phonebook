import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/user/operations';
import { useDispatch } from 'react-redux';

export const AuthNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      </ul>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
