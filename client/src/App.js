import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/Form/Form.jsx';
import Posts from './components/Posts/Posts.jsx';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import { getPosts } from './actions/posts.js';
const App = () => {
    const dispatch = useDispatch();

    const [currentId,setCurrentId] = useState(null);
    useEffect(()=>{
        dispatch(getPosts());
      }, [dispatch, setCurrentId])
    const classes = useStyles();
  return (
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position='static' color='inherit'>
              <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
              <img className={classes.image} src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI" alt="" height='60' />
          </AppBar>
          <Grow in>
              <Container>
                  <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                      <Grid item xs={12} sm={7}>
                      <Posts currentId={currentId} setCurrentId={setCurrentId}></Posts>
                      </Grid>
                      <Grid item xs={12} sm={4}>
        
                          <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                      </Grid>
                  </Grid>
              </Container>
          </Grow>
      </Container>
  )
};

export default App;
