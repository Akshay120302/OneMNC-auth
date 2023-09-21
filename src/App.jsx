// import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home.jsx"
import Modal from "./components/Modal.jsx"
import Customer from "./components/Customer.jsx"
import ProductListing from './components/ProductListing';
import Cart from "./components/Cart"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/Modal' element={<Modal/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Customer' element={<Customer title="One Mnc"/>} />
        <Route path='/ProductListing' element={<ProductListing title="Sellers Site" navBar = "Home"/>} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

