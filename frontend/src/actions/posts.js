import Api from 'api';
import { getAllComments } from 'actions/comments';
import {
  GET_ALL_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from 'actions/constants';

export const getAllPostsAndComments = () => (dispatch) => {
   Api.getPosts()
    .then(posts => {
      dispatch(getAllPostsAction(posts));
      posts.map(({ id }) => dispatch(getAllComments(id)));
    });
}

const getAllPostsAction = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export const addPost = (data) => (dispatch) => {
  Api.addPost(data)
    .then(post => dispatch(addPostAction(post)));
}

const addPostAction = (post) => {
  return {
    type: ADD_POST,
    post
  }
}

export const editPost = (id, data) => (dispatch) => {
  Api.editPost(id, data)
    .then((post) => dispatch(editPostAction(post)));
}

const editPostAction = (post) => {
  return {
    type: EDIT_POST,
    post
  }
}

export const deletePost = (id) => (dispatch) => {
  Api.deletePost(id)
    .then(() => dispatch(deletePostAction(id)));
}

const deletePostAction = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

export const upvotePost = (id) => (dispatch) => {
  Api.upvotePost(id)
    .then(({ id }) => dispatch(upvotePostAction(id)));
}

const upvotePostAction = (id) => {
  return {
    type: UPVOTE_POST,
    id
  }
}

export const downvotePost = (id) => (dispatch) => {
  Api.downvotePost(id)
    .then(({ id }) => dispatch(downvotePostAction(id)));
}

const downvotePostAction = (id) => {
  return {
    type: DOWNVOTE_POST,
    id
  }
}