import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Layout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Welcome to my site!</h1>
                    <h3>I'm the header!</h3>
                    <Link to="/timer">Timer</Link>
                </header>
                
                {this.props.children}
                
                <footer>
                    <h3>I'm the footer!</h3>
                </footer>
            </div>
        )
    }
}

export default Layout;