import React, { Component } from 'react';
import { storeProducts,detailProduct } from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = { 
        products: [],
        detailProduct: detailProduct,
     }
     componentDidMount = () => {
       this.storeProducts();
     };
     
     storeProducts=()=>{
let tempProducts=[];
storeProducts.forEach(item=>{
    const singleItem={...item };
    tempProducts=[...tempProducts,singleItem];
})
this.setState (()=>{
return {products:tempProducts}

})


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