import ReactDOM from 'react-dom';
import React from 'react';

export default class Products extends React.Component {
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