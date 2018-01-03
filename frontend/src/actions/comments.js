import Api from 'api';
import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from 'actions/constants';

export const getAllComments = (postId) => (dispatch) => {
  return Api.getComments(postId)
    .then(comments => dispatch(getAllCommentsAction(comments)));
}

const getAllCommentsAction = (comments) => {
  return {
    type: GET_ALL_COMMENTS,
    comments
  }
}

export const addComment = (parentId, comment) => (dispatch) => {
  Api.addComment(parentId, comment)
    .then((comment) => dispatch(addCommentAction(comment)));
}

const addCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const editComment = (id, comment) => (dispatch) => {
  Api.editComment(id, comment)
    .then((comment) => dispatch(editCommentAction(comment)));
}

const editCommentAction = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export const deleteComment = (id) => (dispatch) => {
  Api.deleteComment(id)
    .then(() => dispatch(deleteCommentAction(id)));
}

const deleteCommentAction = (id) => {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export const upvoteComment = (id) => (dispatch) => {
  Api.upvoteComment(id)
    .then(({ id }) => dispatch(upvoteCommentAction(id)));
}

const upvoteCommentAction = (id) => {
  return {
    type: UPVOTE_COMMENT,
    id
  }
}

export const downvoteComment = (id) => (dispatch) => {
  Api.downvoteComment(id)
    .then(({ id }) => dispatch(downvoteCommentAction(id)));
}

const downvoteCommentAction = (id) => {
  return {
    type: DOWNVOTE_COMMENT,
    id
  }
}