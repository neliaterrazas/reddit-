import React from 'react';
import PropTypes from 'prop-types';
import UpVote from './UpVote';
import DownVote from './DownVote';

function Post(props){
  console.log(props);
  return(
    <div>

      <h1>{props.text}</h1>
      <h2>{props.id}</h2>
      <h5>{props.rating}</h5>
      <UpVote onUpVote={props.onUpvote}/>
      <DownVote/>

    </div>

  );
}

 Post.propTypes = {
   text: PropTypes.string.isRequired
 };

export default Post;
