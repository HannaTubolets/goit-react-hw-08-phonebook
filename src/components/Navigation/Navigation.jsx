import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/Navigation/Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <div className={css.linksWrapper}>
        <div className={css.logoWrapper}>
          <span className={css.logoName}>PhoneBook</span>
          <span className={css.logoDownTxt}>
            Your personal contacs in one place
          </span>
        </div>
        <ul className={css.linksList}>
          <li className={css.navLink}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li className={css.navLink}>
            <NavLink to="register">Registration</NavLink>
          </li>
          <li className={css.navLink}>
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </div>
      {/* <h1 className={css.heading}>
        Create your own contact list, keeping it always close at hand in a safe
        place.
      </h1>
      <img
        src="../../../public/images/contact-us.jpg"
        alt="Laptop with contacts"
      /> */}
      <Outlet />
    </>
  );
}
