import React from "react";
import './App.scss';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'; 
import {getPosts} from './actions/posts';
import Form from "./components/Form/Form.jsx";
import Posts from "./components/Posts/Posts.jsx";
const App = ()=>{

  
   return (
       <>

       <div className="container">
           <div className="form">
               <Form/>
           </div>
           <div className="posts">
               <Posts/>
           </div>
       </div>
       </>
   ) 
}

export default App;