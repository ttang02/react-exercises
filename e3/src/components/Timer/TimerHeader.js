import React, {Component} from 'react'

export default class TimerHeader extends Component{
    render(){
        return(
            <h3>Running for : {this.props.time}</h3>
        )
    }
} 