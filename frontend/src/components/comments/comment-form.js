import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import { addComment, editComment } from 'actions/comments';

const CommentForm = (props) => {
  const { id, postId, hideForm, handleSubmit, pristine, submitting, addComment, editComment } = props;
  
  const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )
  return (
    <Paper className="comment-container">
      <form className='form' onSubmit={handleSubmit(data => {
          const { author, body } = data;
          
          if (id) {
            editComment(id, data);
          } else {
            addComment(postId, data);
          }
          hideForm();
        })}>
        <div>
          <div>
            <Field
              name='author'
              component={renderTextField}
              type='text'
              placeholder='Author Name'
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name='body'
              component={renderTextField}
              placeholder='Add a comment'
              multiLine={true}
              rows={2}
            />
          </div>
        </div>
        <div>
          <RaisedButton
            label="Cancel"
            onClick={hideForm}
            style={{margin: 5}}
          />
          <RaisedButton
            label="Comment"
            secondary={true}
            disabled={pristine || submitting}
            style={{margin: 5}}
            type="submit"
          />          
        </div>
      </form>
    </Paper>
  )
}

export default reduxForm({
  form: 'comment',
  enableReinitialize: true
})(connect(
  undefined,
  { addComment, editComment }
)(CommentForm));