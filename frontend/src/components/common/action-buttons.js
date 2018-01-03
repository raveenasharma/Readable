import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';

import { deletePost } from 'actions/posts';
import { deleteComment } from 'actions/comments';

import RaisedButton from 'material-ui/RaisedButton';

const ActionButtons = ({ type, id, history, match, deletePost, deleteComment, showForm }) => (
  <div className='action-button'>    
    {type === 'posts' ? 
      <RaisedButton
        label="Edit"
        secondary={true}
        containerElement={<Link to={`/posts/${id}/edit`} /> }
        style={{margin: 5}}
        icon={<FontIcon className="material-icons" >mode_edit</FontIcon>}
      />
      :
      <RaisedButton
        label="Edit"
        primary={true}
        onClick={showForm}
        style={{margin: 5}}
        icon={<FontIcon className="material-icons" >mode_edit</FontIcon>}
      />
    }
    <div className='action-button-item'>      
      <RaisedButton
        label="Delete"
        secondary={true}
        style={{margin: 5}}
        onClick={(event) => {
          event.preventDefault();
          if (type === 'posts') {
            deletePost(id);
            history.push('/');
          } else if (type === 'comments') {
            deleteComment(id);
          }
        }} 
        icon={<FontIcon className="material-icons" >delete</FontIcon>}
      />
      
    </div>
  </div>
)

export default withRouter(connect(
  undefined,
  { deletePost, deleteComment }
)(ActionButtons));