import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class NameRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {first_name, last_name} = this.props.name;
        let {id} = this.props.name;
        return(
            <h3><Link to={`/names/${id}`}>{first_name} {last_name}</Link></h3>
        )
    }
}