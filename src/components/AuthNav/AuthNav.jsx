import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.linksList}>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ''}`
        }
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ''}`
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

// import { NavLink } from 'react-router-dom';
// import { logOut } from 'redux/user/operations';
// import { useDispatch } from 'react-redux';

// export const AuthNav = () => {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logOut());
//   };
//   return (
//     <div>
//       <ul>
//         <li>
//           <NavLink to="contacts">Contacts</NavLink>
//         </li>
//       </ul>
//       <button type="button" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };
