import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import TakeAway from './screens/TakeAway';
 
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle]=useState(false);
  
  return (
    <Router>
      <Navbar click={()=> setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=> setSideToggle(false)}/>
      <main className="app">
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/product/:id" element={<ProductScreen/>}/>
          <Route exact path="cart" element={<CartScreen/>}/>
          <Route exact path="/take-away/" element={<TakeAway/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
