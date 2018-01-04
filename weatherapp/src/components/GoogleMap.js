import React, {Component} from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        //a ref where you want to render the map in the HTML 

        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center : {
                lat : this.props.lat,
                lng : this.props.lon
            }
        });
    }

    render(){
        return(
            <div ref="map" />
        )
    }
}

export default GoogleMap;

//ref reference to html element. This.refs.map