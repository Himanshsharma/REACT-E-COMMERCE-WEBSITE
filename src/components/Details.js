import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from "react-router-dom";
import {ButtonContainer } from './Button';


class Details extends Component {
    state = {  }
    render() { 
        return ( 
        <ProductConsumer>
        {(value)=>{
            console.log(value.detailProduct);
        }}
        
        
        
        
        </ProductConsumer>    
            
            
         );
    }
}
 
export default Details;