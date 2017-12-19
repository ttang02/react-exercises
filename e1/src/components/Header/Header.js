import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component{
    constructor(){
        super();
    }
    render(){
        const style={
            background : 'red',
            fontSize : '2em'
          }
        return (
            <div>
                <ul>
                    <li><NavLink to="/" activestyle={style}>Home</NavLink></li>
                    <li><NavLink to="/timer" activestyle={style}>Timer</NavLink></li>
                    <li><NavLink to="/names" activestyle={style}>Name List</NavLink></li>
                </ul>
            </div>
        )
    }
}