import React, {Component} from 'react'

export default class TimerButton extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <button onClick={this.props.handle}>
                {this.props.isStarted ? 'Stop Timer' : 'Start Timer'}
            </button>
        )
    }
}