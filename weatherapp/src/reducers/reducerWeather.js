import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            //add to the current array, to have a list of cities.
            //return a new instance of state.
            //instead of push in array, we need to return a new array with datas
            //concat didnt change the current array.
            //return state.concat([action.payload.data]);
            //ES6 way
            return [action.payload.data, ...state];
        default :
            return state;
    }
}