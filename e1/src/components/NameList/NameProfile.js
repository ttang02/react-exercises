import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import names from '../../../mock-data';

export default class NameProfile extends Component{
    constructor(){
        super()
        this.clickHandler = this.clickHandler.bind(this);
    }
    componentWillMount(){
        let {id} = this.props.match.params;
        this.user = names.find((name) =>{
            if(name.id === +id) // pour convertir en nombre
            return name;
        })
    }

    render(){
        let user = this.user;
        if(user){
            user = 
            <div>
                <h2>{this.user.first_name} {this.user.last_name}</h2>
                <h3>{this.user.email}</h3>
                <h4>{this.user.city}</h4>
                <h5>{this.user.catch_phrase}</h5>
            </div>
        } else{
            user = <h2>Sorry, this user was not found :( </h2>
        }
        return (
            <div>
                {user}
                <Link to="/names"><button>Go to all names</button></Link>
            </div>
        )
    }
}
