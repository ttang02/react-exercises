import React, {Component} from 'react'

import PRODUCTS from '../../../mock-products';

class ProductProfile extends Component{
    constructor(){
        super();
    }
    componentWillMount(){
        let productID = this.props.id || +this.props.match.params.id ;
        this.product = PRODUCTS.find((product) =>
            product.id === productID
        )
    }
    render(){
        let { productName, productAdjective, price, productMaterial, color, text, image } = this.product
        return (
            <div>
                The <strong>{productName}</strong> has a wonerful {color} color, with inspired 
                {productAdjective} {productMaterial} properties. 
                <h4>Price : {price}</h4>
                <p>{text}</p>
                <img src={image} />
            </div>
        )
    }
}

export default ProductProfile;