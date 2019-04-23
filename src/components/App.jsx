import React from "react";
import PostForm from './PostForm';
import PostDisplayer from './PostDisplayer';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts : [
        {text: "sometext", rating: 10}
      ]
    }
    this.handleAddingPost = this.handleAddingPost.bind(this);
  }

  handleAddingPost(postFromChild) {
    const newPosts = this.state.posts.slice();
    newPosts.push(postFromChild);
    this.setState({posts : newPosts});
  }

  render(){
    return (
      <div>
      <PostForm onAddingPost={this.handleAddingPost}/>
      <PostDisplayer posts={this.state.posts} />

      </div>
    )


  }


}

export default App;
