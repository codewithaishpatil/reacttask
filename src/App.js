
import Navbar from './Navbar';

import Gotomenu from './Gotomenu';
import Menu from './Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/login';
import Signup from './Signup/signup';
import Checkout from './Checkout';

function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/"  element={ <Signup/>}></Route>

    <Route exact path="/signup"  element={ <Signup/>}></Route>

    <Route exact path="/login"  element={ <Login />}></Route>
     <Route exact path="/gotomenu"  element={< Gotomenu />}></Route>
     <Route exact path="/menu"  element={ <Menu/>}></Route>
    
    
     <Route exact path="/checkout"  element={ <Checkout />}></Route>
  
  
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
