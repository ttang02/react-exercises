import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './header.css';

export default class Header extends Component{
    constructor(){
        super();
    }
    render(){
 
        return (
            <div className="pure-menu pure-menu-horizontal nav">
            <NavLink className="pure-menu-heading pure-menu-link" to="/" >Home</NavLink>
                <ul className="pure-menu-list">
                    <li className="pure-menu-list"><NavLink className="pure-menu-link" to="/timer">Timer</NavLink></li>
                    <li className="pure-menu-list"><NavLink className="pure-menu-link" to="/products">Products</NavLink></li>
                    <li className="pure-menu-list"><NavLink className="pure-menu-link" to="/names">Name List</NavLink></li>
                </ul>
            </div>
        )
    }
}