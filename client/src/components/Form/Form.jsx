import React, {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import styles from './styles';
import {useDispatch} from 'react-redux';

import FileBase from 'react-file-base64';
import { createPost } from '../../api/index.js';
const Form = () => {
    const classes = styles();
    const [postData,setPostData] = useState({
        creator : '', ttile : '', message : '', tags : '', selectedFile : '',
    });
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setPostData({
            ...postData, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(()=>createPost(postData));
        console.log(postData);
    }
    const clear = ()=>{

    }

    return <div>
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate  onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Post</Typography>
                <TextField name='creator' variant='outlined' label='creator' fullWidth value={postData.creator}
               onChange={handleChange}
                ></TextField>
                <TextField name='title' variant='outlined' label='title' fullWidth value={postData.title}
               onChange={handleChange}
                ></TextField>
                <TextField name='tags' variant='outlined' label='tags' fullWidth value={postData.tags}
               onChange={handleChange}
                ></TextField>
                <TextField name='message' variant='outlined' label='message' fullWidth value={postData.message}
               onChange={handleChange}
                ></TextField>
               <div className={classes.fileInput}>
                   <FileBase
                   type="file"
                   multiple={false}
                   onDone={({base64})=>setPostData({...postData,selectedFile : base64})}
                   />
               </div>
               <Button className={classes.buttonSubmit} type="submit" variant='contained' color='primary' size='large' fullWidth>Submit</Button>
               <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    </div>
};

export default Form;


