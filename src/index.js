import ReactDOM from 'react-dom';
import React from 'react';
import './scss/main.scss';
import Cart from './app/container/cart.component';
import Products from './app/container/products.component';

// Cart
ReactDOM.render(
    <Cart></Cart>,
    document.getElementById('cart')
);

// Product
ReactDOM.render(
    <Products></Products>,
    document.getElementById('products')
);


// Product List
// const productListElement = document.getElementById('product-list');
// const e = React.createElement;
// class ProductList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return e(
//             'div',
//             {},
//             'Product list'
//         );
//     }
// }
// ReactDOM.render(e(ProductList), productListElement);