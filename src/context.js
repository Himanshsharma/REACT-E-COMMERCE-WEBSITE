import React, { Component } from 'react';
import { storeProducts,detailProduct } from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = { 
        products: [],
        detailProduct: detailProduct,
     }
     storeProducts=()=>{
let products=[];
storeProducts.forEach(item=>{
    const singleItem={...item };
    products=[...products,singleItem];
})
this.setState


     }
     handleDetail=()=>{

     }
     addToCart=()=>{
}



    render() { 
        return ( 
            <ProductContext.Provider value={{
...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart
            }}>
            
            {this.props.children}
            
            </ProductContext.Provider>
         );
    }
}
const ProductConsumer=ProductContext.Consumer;
export{ProductProvider ,ProductConsumer}
 
export default ProductProvider;