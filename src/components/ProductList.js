import React, { Component } from 'react';
import Product from './Product';
import Title from "./Title";
import {storeProducts} from "../data";
import {ProductConsumer} from "../context";
class productList extends Component {
    state = { 
        products:storeProducts
     }
    render() { 
        return (
           <React.Fragment>
           <div className="py-5">
           <div className="container">
           <Title name="our" title="products"></Title>
           <div className="row">
           <ProductConsumer>
           {value=>{
               return value.products.map(product=>{
                   return <Product product={product} key={product.id} />
               })

           }}
           
           </ProductConsumer>
    
           </div>
        </div></div></React.Fragment> 
            //<Product></Product>
            
          );
    }
}
 
export default productList;