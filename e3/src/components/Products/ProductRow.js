import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ProductRow extends Component{
    constructor(){
        super();
    }
    render(){
        const style = {
            width : '35%',
            height : 'auto'
        }
        const {id ,productName, price, productAdjective, image} = this.props.product;
        return(
            <div className="pure-u-1 pure-u-md-1-3">
                <h3><Link to={`/products/${id}`}>{productName}</Link></h3>
                <ul>
                    <li>{productAdjective}</li>
                    <li>${price}</li>
                    <li><img style={style} className="pure-img" src={image}/>></li>
                </ul>
            </div>
        )
    }
}

export default ProductRow;