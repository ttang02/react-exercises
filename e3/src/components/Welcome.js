import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends Component {
    render(){
        console.log(this.props.originalPhrase);
        return (
            <div>
                <h2>{this.props.originalPhrase}</h2>
                <h4>{this.props.lastname}</h4>
                <h4>{this.props.firstname}</h4>
            </div>
        )
    }
}
//creer notre propre checker
const lengthChecker = ((props, propName, component)=>{
    console.log(props);
    console.log(propName);
    console.log(component);
})


Welcome.propTypes = {
    firstname : lengthChecker,
    lastname : PropTypes.string,
    originalPhrase : PropTypes.string.isRequired
};

Welcome.defaultProps = {
    originalPhrase : "I dont have any props :("
};