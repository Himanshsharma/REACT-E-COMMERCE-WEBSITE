import React, { Component } from 'react';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductContext.Provider value="hello from context">
            {this.props.children}
            
            </ProductContext.Provider>
         );
    }
}
const ProductConsumer=ProductContext.Consumer;
export{ProductProvider ,ProductConsumer}
 
export default ProductProvider;