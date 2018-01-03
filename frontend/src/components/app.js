import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getAllCategories } from 'actions/categories';
import { getAllPostsAndComments } from 'actions/posts';
import Content from './main-app';
import NavigationMenu from './navigation-menu';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPostsAndComments();
  }

  render() {
    return (
      <div className='main-container'>
        <NavigationMenu />
        <Content/>        
      </div>
    );
  }
}

export default withRouter(connect(undefined,
  { fetchCategories: getAllCategories, fetchPostsAndComments: getAllPostsAndComments }
)(App));
