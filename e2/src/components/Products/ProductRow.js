import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ProductRow extends Component{
    constructor(){
        super();
    }
    render(){
        let {id ,productName, price, productAdjective} = this.props.product;
        return(
            <div>
                <h3><Link to={`/products/${id}`}>{productName}</Link></h3>
                <ul>
                    <li>{productAdjective}</li>
                    <li>${price}</li>
                </ul>
            </div>
        )
    }
}

export default ProductRow;