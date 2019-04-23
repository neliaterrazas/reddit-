import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function PostForm(props){
  let _text = null;

  function HandleFormSubmit(event) {
    event.preventDefault();
    const newPost = {text: _text.value, rating: 2, id:v4()};
    props.onAddingPost(newPost);
    _text.value = '';
  }

  return(
    <div>

      <form onSubmit={HandleFormSubmit} input="text">

        <input type="text" ref={(input) => {_text = input;}}/>
        <button/>
      </form>

    </div>
  );
}

PostForm.PropsTypes = {
  onAddingPost : PropTypes.func
}

export default PostForm;
