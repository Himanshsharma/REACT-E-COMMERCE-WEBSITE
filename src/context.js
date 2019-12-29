import React, { Component } from 'react';
import { storeProducts,detailProduct } from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = { 
        products: storeProducts,
        detailProduct: detailProduct,
     }
     handleDetail=()=>{

     }
     addToCart=()=>{


    }
    tester=()=>{
console.log("State products :", this.state.products[0].inCart);
console.log("Data products : ", store.products[0].inCart);
const tempProducts={...this.state.products};
tempProducts[0].inCart=true
this.setState(()=>{
    return {products:tempProducts}
})

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