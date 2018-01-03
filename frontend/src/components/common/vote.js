import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const Vote = ({ voteScore, onUpvote, onDownvote }) => (
  <div className='votes'>
    <div className='votes-item'>
      <FontIcon className="material-icons" onClick={onUpvote} color={'green'}>thumb_up</FontIcon>      
    </div>
    <div className='votes-item'>
      <span>{voteScore}</span>
    </div>
    <div className='votes-item'>
    <FontIcon className="material-icons" onClick={onDownvote}>thumb_down</FontIcon>   
    </div>
  </div>
)

export default Vote;