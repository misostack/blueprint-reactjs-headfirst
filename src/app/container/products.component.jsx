import ReactDOM from 'react-dom';
import React from 'react';
import { hot } from 'react-hot-loader/root'

class ProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
                <p>Empty Product</p>
            </div>
        )
    }
}
const Products = () => <ProductsComponent></ProductsComponent>
export default hot(Products);