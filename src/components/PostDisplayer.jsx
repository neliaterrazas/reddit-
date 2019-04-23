import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostDisplayer(props){

  return(
    <div>
      {
        props.posts.map((post, index) => <Post text={post.text} rating={post.rating} id={post.id} key={post.id}/>)
      }
    </div>

  );
}

PostDisplayer.propTypes = {
  posts : PropTypes.array
}

export default PostDisplayer;
