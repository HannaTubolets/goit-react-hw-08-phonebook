import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/operations';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import Navigation from './Navigation/Navigation';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/register" element={<RegistrationPage />}></Route>
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/points" component={<RegistrationPage />} />
          }
        /> */}
        <Route path="/login" element={<LoginPage />}></Route>
        {/* <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/points" component={<LoginPage />} />
          }
        /> */}
      </Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      {/* <Route
        path="/contacts"
        element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
      /> */}
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
