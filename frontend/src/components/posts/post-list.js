import React from 'react';
import { Link } from 'react-router-dom';

import { POST } from '../common/constants';
import Sorter from '../sorter';
import PostPreview from './post-preview';

import RaisedButton from 'material-ui/RaisedButton';

const conditionalRender = (WrappedComponent) => ({ posts, ...props }) => (
  posts.length === 0 ?
  <WrappedComponent>
    <p>Post list is empty</p>
  </WrappedComponent>
  :
  <WrappedComponent {...props}>
    <div className="posts-container">
    {posts.map(
      post => <PostPreview key={post.id} {...post} />
    )}
    </div>
  </WrappedComponent>
)

const PostList = ({ children }) => (
  <div className='post-list'>
    <div className='post-submenu'>
      <RaisedButton label="Add Post" primary={true}
      style={{alignSelf: 'center'}}
      containerElement={<Link to='/posts/new' />} />
        
        <Sorter content={POST} />
    </div>
    {children}
  </div>
)

export default conditionalRender(PostList);