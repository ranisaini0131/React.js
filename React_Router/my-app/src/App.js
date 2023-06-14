import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import OrderSummary from './components/OrderSummary.js';
import NoMatch from './components/NoMatch.js';
import Products from './components/Products.js';
import FeaturedProduct from './components/FeaturedProduct.js';
import NewProducts from './components/NewProducts.js';
import Users from './components/Users.js';
import UserDetails from './UserDetails.js';
import Admin from './components/Admin.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path='featured' element={<FeaturedProduct />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />}></Route>
          <Route path='admin' element={<Admin />}></Route>
        </Route>

        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
