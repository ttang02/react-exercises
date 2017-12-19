import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import ProductProfile from '../Products/ProductProfile';
import PRODUCTS from '../../../mock-products'

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let randomProduct = Math.floor(Math.random() * PRODUCTS.length)

        return(
            <div>          
                <h2>Lorem ipsum dolor sit amet</h2>
                <ul>
                    <li>Fusce rutrum nunc vitae</li>
                    <li>Morbi a augue eu magna ornare tempus</li>
                    <li>Etiam vulputate mauris vitae commodo sagittis</li>
                </ul>

                <Link to={`/products/${randomProduct}`}><ProductProfile id={randomProduct} /></Link>
                <p>
                    Ut ultricies tellus non orci vehicula finibus. Sed tellus augue, varius et tortor nec, 
                    semper laooreet ex.
                </p>
            </div>
        )
    }
}

export default Home;