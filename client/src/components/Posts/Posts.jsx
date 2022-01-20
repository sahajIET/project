import React, {useEffect} from 'react';
import Post from './Post/Post.jsx';
import {useSelector, useDispatch} from 'react-redux';
import { getPosts } from '../../actions/posts.js';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  }, [])
  const posts = useSelector(state=>state.posts);
  console.log(posts);
  return <div>
      <h1>POSTS</h1>
      <h2>{}</h2>
      <Post/>
      <Post/>
  </div>;
};

export default Posts;
