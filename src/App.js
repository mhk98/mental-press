import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Checkout from './pages/Home/Checkout/Checkout';
import ThankYou from './pages/Home/ThankYou/ThankYou';
import Login from './pages/Home/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import RequireAuth from './pages/Home/RequireAuth/RequireAuth';
import NotFound from './pages/Home/Home/NotFound/NotFound';
import Blog from './pages/Home/Blog/Blog';
import About from './pages/Home/About/About';
import SignUp from './pages/Home/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/thankyou' element={<ThankYou></ThankYou>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App
