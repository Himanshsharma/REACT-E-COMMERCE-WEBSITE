import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'; 
import styled from 'styled-components';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
            {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
<Link to='/'>
<img src={logo} alt="store" className="navbar-brand" />
</Link>
<ul className="navbar-nav align-items-center" >
<li className="nav-item ml-5">
<Link to="/" className="nav-link">
Products
</Link>
</li>
</ul>
<Link to="/cart" className="ml-auto">
<ButtonContainer><span className="mr-2"><i className="fas fa-cart-plus"></i></span>{'    '}my cart</ButtonContainer></Link>
</nav>  
);
    }
}
const ButtonContainer= styled.button`
text-transform:capitalize;
`
 
export default Navbar;