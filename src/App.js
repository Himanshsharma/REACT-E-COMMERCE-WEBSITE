import React, { Component } from 'react';
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
     <ProductList />
     <Details />
     <Cart />
     <Default />
      
      
      
      </React.Fragment>
      );
  }
}
 

export default App;
