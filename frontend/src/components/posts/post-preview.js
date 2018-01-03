import React from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';

import { upvotePost, downvotePost } from 'actions/posts';
import Vote from '../common/vote';
import { POST } from '../common/constants';
import ActionButtons from '../common/action-buttons';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

const PostPreview = ({ id, title, author, body, category, timestamp, comments = [], voteScore, onUpvotePost, onDownvotePost }) => (
  
  <Card key={id} className="post">
    <div className="post-vote">
      <Vote 
        onUpvote={() => onUpvotePost(id)}
        onDownvote={() => onDownvotePost(id)}
        voteScore={voteScore}
      />
    </div>
    <CardTitle title={title} subtitle={`by ${author}`} />
    
    <CardText expandable={false} >
      <div className="post-content">
        {body}     
      </div>
      <div className="comment-count">{comments.length} Comments</div>   
    </CardText>
    <CardActions>
      <div className="align-left">
        <ActionButtons type={POST} id={id} commentsCount={comments.length} />
      </div>
      
      <div className="align-right">
        <FloatingActionButton mini={true} containerElement={<Link to={`/posts/${category}/${id}`} />}>
          <FontIcon className="material-icons" >keyboard_arrow_right</FontIcon>
        </FloatingActionButton>
      </div>
    </CardActions>
  </Card>
)

export default connect(
  undefined,
  { onUpvotePost: upvotePost, onDownvotePost: downvotePost }
)(PostPreview);