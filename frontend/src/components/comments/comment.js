import React from 'react';
import { connect } from 'react-redux';

import { upvoteComment, downvoteComment } from 'actions/comments';
import Vote from '../common/vote';
import { COMMENT } from '../common/constants';
import ActionButtons from '../common/action-buttons';
import { formatDate } from 'utils/helper';

const Comment = ({ id, body, author, timestamp, voteScore,
  onUpvoteComment, onDownvoteComment, onDelete, showEditCommentForm }) => {
  return (
    <div className='content-container-comment'>
      <Vote
        voteScore={voteScore}
        onUpvote={() => onUpvoteComment(id)}
        onDownvote={() => onDownvoteComment(id)}
      />
      <div className='comment-detail'>
        <div className='comment-body'><b>{author}</b> {body}</div>
        <p className='timestamp'>{formatDate(timestamp)}</p>
        <ActionButtons type={COMMENT} id={id} showForm={showEditCommentForm} />
      </div>
    </div>
  )
}

export default connect(
  undefined,
  { onUpvoteComment: upvoteComment, onDownvoteComment: downvoteComment }
)(Comment);