import React, { Component } from 'react';
const ProductContext = React.createContext();
import { storeProducts,detailProducts} from './data';
class ProductProvider extends Component {
    state = { 
        products: storeProducts,
        detailProduct: detailProduct,
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