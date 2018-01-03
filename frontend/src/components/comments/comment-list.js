import React, { Component } from 'react';

import { COMMENT } from '../common/constants';
import Sorter from '../sorter';
import Comment from './comment';
import CommentForm from './comment-form';

import RaisedButton from 'material-ui/RaisedButton';

class CommentList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showCommentForm: false,
      commentForEdit: {}
    }
    this.showCommentForm = this.showCommentForm.bind(this);
    this.hideCommentForm = this.hideCommentForm.bind(this);
  }

  showCommentForm(comment) {
    this.setState({ showCommentForm: true, commentForEdit: comment });
  }

  hideCommentForm() {
    this.setState({ showCommentForm: false, commentForEdit: {} });
  }
  
  filterCommentById(comments, id) {
    return comments.filter(comment => comment.id === id);
  }  

  render() {
    const { postId, comments } = this.props;
    const { showCommentForm, commentForEdit } = this.state;
    return (
      <div>
        <div className='post-comments'>
          <h3>Comments</h3>
        </div>
        <div className='post-submenu'>
          <RaisedButton label="Add Comment" primary={true}
            style={{alignSelf: 'center'}}
            onClick={(event) => {
              event.preventDefault();
              this.showCommentForm();
            }} />
          <Sorter content={COMMENT} />
        </div>
        {showCommentForm && 
        <CommentForm
          initialValues={commentForEdit}
          hideForm={this.hideCommentForm}
          id={commentForEdit && commentForEdit.id}
          postId={postId}
        />}
        {comments.length === 0 ? 
          <p>No Comments</p>
          :
          comments.map(comment => 
            <Comment
              key={comment.id}
              showEditCommentForm={(event) => {
                event.preventDefault();
                this.showCommentForm(comment)
                }}
              {...comment}
            />)
        }
      </div>
    )
  }
}

export default CommentList;