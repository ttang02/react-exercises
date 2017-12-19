import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>          
                <h2>Lorem ipsum dolor sit amet</h2>
                <ul>
                    <li>Fusce rutrum nunc vitae</li>
                    <li>Morbi a augue eu magna ornare tempus</li>
                    <li>Etiam vulputate mauris vitae commodo sagittis</li>
                </ul>
                <p>
                    Ut ultricies tellus non orci vehicula finibus. Sed tellus augue, varius et tortor nec, 
                    semper laooreet ex.
                </p>
            </div>
        )
    }
}

export default Home;