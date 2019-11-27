import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'; 
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import Default from './components/Default';

import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
     <h3> hello for app</h3>
     <Navbar />
     <Switch>
     <Route path='/' Component={ProductList}></Route>
     <Route path='/details' Component={Details}></Route>
     <Route path='/cart' Component={Cart}></Route>
     <Route compponent={Default}></Route>
     </Switch>
     
  

    
      
      
      </React.Fragment>
      );
  }
}
 

export default App;
