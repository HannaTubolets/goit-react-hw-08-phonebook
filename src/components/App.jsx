import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/Home/HomePage';
import Layout from './Layout';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Route>
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
