import React, {Component} from 'react';

import './products.css';
import faker from 'faker';

import ProductRow from './ProductRow.js';

import PRODUCTS from '../../../mock-products';

class ProductList extends Component{
    constructor(){
        super();
        this.state = {
            products : []
        }
    }
    componentWillMount(){
        this.setState({
            products : PRODUCTS
        })
    }

    render(){
        let { products } = this.state;       
        return (
            <div className="pure-g placeholder">
                {products.map((product) =>
                   <ProductRow key={product.id} product={product} />
                )}
            </div>
        )
    }
}
export default ProductList;