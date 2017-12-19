import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    constructor(){
        super();
        this.renderList = this.renderList.bind(this);
    }

    renderList(){
        return this.props.books.map((book) =>{
            return (
                <li key={book.title}
                onClick={()=> this.props.selectBook(book)}
                className="list-group-item">{book.title}</li>
            )
        })
    }
    
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
//To connect component to state of redux
const mapStateToProps = (state) =>{
    //Return inside to props
    //we take books of reducers
    //state change auto-render component
    return {
      books: state.books  
    };
}
// end up as props on the Booklist container
// So we can call this.props.selectBook
const mapDispatchToProps = (dispatch) =>{
    //Whenever selectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({selectBook : selectBook}, dispatch);
}

//export the container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);