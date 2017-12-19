import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component{
    constructor(){
        super();
    }
    render(){
 
        return (
            <div>
                <ul>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/timer">Timer</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/names">Name List</NavLink></li>
                </ul>
            </div>
        )
    }
}