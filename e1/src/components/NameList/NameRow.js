import React, {Component} from 'react'

export default class NameRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {first_name, last_name} = this.props.name;
        return(
            <h3>{first_name} {last_name}</h3>
        )
    }
}