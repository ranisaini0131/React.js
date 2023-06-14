import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import NavBar from './components/NavBar.js';
import Products from './components/Products.js';
import Featured from './components/Featured.js';
import NewProducts from './components/NewProducts.js';
import NoMatch from './components/NoMatch.js';
import Users from './components/Users.js';
import UsersDetail from './components/UsersDetail.js';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<Featured />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UsersDetail />}></Route>
          {/* <Route path='userDetails' element={<UsersDetail />}></Route> */}
        </Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
