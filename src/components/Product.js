import React, { Component } from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
class Product extends Component {
    state = {  }

    render() { 
        const {id, title, img, price, inCart} = this.props.product;
        return ( 
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-6 my-3">
            <div className="card">
            <div className="img-container p-5" onClick={()=>console.log("you")}>
            <Link to="/details">
            <img src={img} alt="product" className="card-img-top"></img></Link>
            <button className='cart-btn' disabled={inCart ? true : false} onClick={()=>{console.log("lololo")}}>
            { inCart ? <p className='text-capitalize mb-0' disabled>in in cart</p>: <i className='fas fa-cart-plus'></i>}
            
            
            
            </button>
            
            
            
            </div>
{/* card footer */}

<div className="card-footer d-flex justify-content-between">
<p className="align-self-center mb-0">{title}</p><h5 className="text-blue font-italic mb-0">
<span className="mr-1">
$
</span>
{price}
</h5></div>
</div>
</ProductWrapper>
         );
    }
}
 const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all is linear;

}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all is linear;
}
&:hover{
    .card{
        border:0.4ren solid rgba(0,0,0,2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);

    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
overflow:hidden;
}
.card-img-top{
    transition:all is linear;
}

.img-container:hover .card-img-top{
transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:#009ffd;
    border:none;
    color:#f3f3f3;
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%);
    transition:all is linear;
}
.img-container:hover .cart-btn {
    transform:translate(0, 0);
}

`
export default Product;