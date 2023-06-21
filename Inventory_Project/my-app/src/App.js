import './App.css';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './component/forms/Login.js';
import PasswordChange from './component/forms/PasswordChange.js';


function App() {

  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <>
      <h1>Application</h1>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/passwordchange' element={<PasswordChange />}></Route>
      </Routes>
    </>
  );
}

export default App;
