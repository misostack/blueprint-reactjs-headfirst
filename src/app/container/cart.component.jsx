import ReactDOM from 'react-dom';
import React from 'react';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <p>Empty Cart</p>
            </div>
        )
    }
}

/*
render(){
    return React.createElement(
        'div',
        {},
        'Empty Cart'
    );
}
*/