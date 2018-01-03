import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { capitalizeFirst } from 'utils/helper';
import { addPost, editPost } from 'actions/posts';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

const PostForm = (props) => {
  const { handleSubmit, pristine, submitting, categories,
    addPost, editPost, history, match } = props;
  const isEdit = match.url.indexOf('edit') !== -1;

  const renderTextField = ({
    input,
    label,
    placeholder,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={placeholder}
      floatingLabelText={label}
      errorText={touched && error}
      fullWidth={true}
      {...input}
      {...custom}
    />
  )

  const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  )

  return (
    <Paper style={{padding: 20}} zDepth={1} >
    <Toolbar>
    <ToolbarTitle text={isEdit? "Edit Post": "Add Post"} />
    </Toolbar>
    <form className='form' onSubmit={handleSubmit(data => {
      const { title, body, category = categories[0].name, author } = data;
      data = { title, body, category, author };
      if(isEdit) {
        editPost(match.params.id, data);
      } else {
        addPost(data);
      }
      history.goBack();
      })}
    >
      <div >
        <div >
          <Field
            name='title'
            component={renderTextField}
            type='text'
            placeholder='Provide a title for your post'
            label='Title'
          />
        </div>
      </div>
      <div >
        <div >
          <Field
            name='author'
            component={renderTextField}
            type='text'
            placeholder='Name the author'
            label='Author'
          />
        </div>
      </div>
      <div >
        <div >
          <Field name='category' component={renderSelectField} label='Category'>
            {categories.map((category, index) => 
              <MenuItem key={index} value={category.name} primaryText={capitalizeFirst(category.name)} />
            )}
          </Field>
        </div>
      </div>
      <div >
        <div >
          <Field
            name='body'
            label='Body'
            component={renderTextField}
            placeholder='Start typing...'
            multiLine={true}
            rows={5}
          />
        </div>
      </div>
      <div >
        <RaisedButton type='button' onClick={() => history.goBack()} style={{margin: 5}} label="Back" />
        
        <RaisedButton type='submit' disabled={pristine || submitting} style={{margin: 5}} primary={true} label="Submit" />
        
      </div>
    </form>
    </Paper>
  )
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default reduxForm({ 
  form: 'post'
})(withRouter(connect(mapStateToProps,
  { addPost, editPost }
)(PostForm)));