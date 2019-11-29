import React, { Component } from 'react';
import Product from './Product';
import Title from "./Title";
import {storeProducts} from "../data";
class productList extends Component {
    state = { 
        products:[]
     }
    render() { 
        return (
           <React.Fragment>
           <div className="py-5">
           <div className="container">
           <div className="row">
           <Title name="our" title="products"></Title>
           </div>
        </div></div></React.Fragment> 
            //<Product></Product>
            
          );
    }
}
 
export default productList;