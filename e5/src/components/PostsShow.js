import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost} from '../actions';
import {Link } from 'react-router-dom';

class PostsShow extends Component{
    constructor(){
        super();
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    componentDidMount(){
        //params on url
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    onDeleteClick(){
        //action redux
        const { id } = this.props.match.params;
        this.props.deletePost(id, () =>{
            //redirect to index
            this.props.history.push('/');
        });
    }
    
    render(){
        const {post} = this.props;
        if(!post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link className="btn btn-primary" to="/">Back to Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories : {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    };
}
//ownProps on PostsShow
// this.props === ownProps
const mapStateToProps = ({ posts }, ownProps) => {
    return { post : posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);