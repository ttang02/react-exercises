import React, {Component} from 'react'
import NameRow from './NameRow'

import names from '../../../mock-data'

export default class FilterableNameList extends Component{
    constructor(){
        super();
        this.state = {
            names : [],
            filterText : ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.nameFilter = this.nameFilter.bind(this);
    }
    componentWillMount(){
        this.setState({
            names : names
        })
    }
    handleClick(event){
        event.preventDefault();
        this.setState({
            event: event.type
        })
    }
    
    nameFilter(event){
        /*
        let newNames = this.state.names.filter((name)=>{
            let fullName = `${name.first_name} ${name.last_name}`
            //includes() : return true if event.target.value is included in fullName
            return fullName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        */
        this.setState({
            filterText : event.target.value
        })
    }

    render(){
        let { names } = this.state;
        let { filterText } = this.state;
        if(filterText){
            names = names.filter((name) =>{
                let fullName = `${name.first_name} ${name.last_name}`
               return fullName.toLowerCase().includes(filterText.toLowerCase())
            });
        }
        return (
            <div>
                <input 
                    onChange={this.nameFilter} 
                    type="text" />
                <div className="pure-g">
                    {names.map((name) => 
                        <NameRow key={name.id} name={name} />
                    )}
                </div>
            </div>
        )
    }
}