import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import RegistrationPage from './components/RegistrationPage.js';
import LoginPage from './components/LoginPage.js';
import ProfilePage from './components/ProfilePage.js';
import AdminLogin from './components/AdminLogin.js';
import AdminDashBoard from './components/AdminDashBoard.js';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/adminLogin' element={<AdminLogin />}></Route>
      <Route path='/adminDashboard' element={<AdminDashBoard />}></Route>
      <Route path='/userRegistration' element={<RegistrationPage />}></Route>
      <Route path='/userLogin' element={<LoginPage />}></Route>
      <Route path='/UserProfilePage' element={<ProfilePage />}></Route>
    </Routes>
  );
}

export default App;
