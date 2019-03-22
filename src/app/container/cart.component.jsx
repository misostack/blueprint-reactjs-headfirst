import ReactDOM from 'react-dom';
import React from 'react';
import { hot } from 'react-hot-loader/root'

class CartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Cart 123</h1>
                <p>Empty Cart</p>
            </div>
        )
    }
}
const Cart = () => <CartComponent></CartComponent>
export default hot(Cart)

/*
render(){
    return React.createElement(
        'div',
        {},
        'Empty Cart'
    );
}
*/