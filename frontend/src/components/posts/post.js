import React from 'react';
import { connect } from 'react-redux';

import { upvotePost, downvotePost } from 'actions/posts';
import Divider from 'material-ui/Divider';
import Vote from '../common/vote';
import { POST } from '../common/constants';
import ActionButtons from '../common/action-buttons';
import CommentList from '../comments/comment-list';
import { formatDate } from 'utils/helper';

const Post = (props) => {
  const { id, title, body, author, timestamp, voteScore, comments = [],
    onUpvotePost, onDownvotePost } = props;
  
  return (
    <div>
      <div className='post-container'>
        <Vote
          onUpvote={() => onUpvotePost(id)}
          onDownvote={() => onDownvotePost(id)}
          voteScore={voteScore}
        />
        <div className='post-detail'>
          <h2 className='heading'>{title}</h2>
          <p className='author-date-time'>by <b>{author}</b></p>
          <p className='timestamp' style={{marginTop: -10}}>{formatDate(timestamp)}</p>
          <p className='post-body'>{body}</p>
          <ActionButtons type={POST} id={id} commentsCount={comments.length} />
        </div>
      </div>
      <Divider />
      <CommentList postId={id} comments={comments} />
    </div>
  )
}

export default connect(
  undefined,
  { onUpvotePost: upvotePost, onDownvotePost: downvotePost }
)(Post);