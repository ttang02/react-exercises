import React, {Component} from 'react'

import TimerHeader from './TimerHeader'
import TimerButton from './TimerButton'

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            time : 0,
            isStarted : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(() => this.startTimer(), 1000);
        //Redirection            this.props.history.push('/');
        
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    startTimer(){
        this.setState(prevState => ({
            time : prevState.time +=1
        }))
    }
    endTimer(){
        clearInterval(this.timer);
        this.setState({
            isStarted : false
        })
    }

    handleClick() {
        this.state.isStarted ?
            this.endTimer() :
            this.timer = setInterval(
                () => this.startTimer(),
            1000);
            
    }

    render(){
        return (
            <div>
                <TimerHeader time={this.state.time} />
                <TimerButton handle={this.handleClick} isStarted={this.state.isStarted} />
            </div>
        )
    }
}
