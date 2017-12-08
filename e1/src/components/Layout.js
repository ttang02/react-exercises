import React, {Component} from 'react'
import Timer from './Timer'
import FilterableNameList from './FilterableNameList'
class Layout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Welcome to my site!</h1>
                <h3>Happy to have you here :)</h3>
                <Timer/>
                <FilterableNameList names={this.props.names} />
            </div>
        )
    }
}

export default Layout;