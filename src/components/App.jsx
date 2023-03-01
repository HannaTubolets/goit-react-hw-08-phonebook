import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
