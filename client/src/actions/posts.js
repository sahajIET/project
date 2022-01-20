import * as api from '../api';


//Action Creators
export const getPosts = ()=>async(dispatch)=>{
    try{
        // console.log('Reached at action');
        const {data} =await api.fetchPosts();
        console.log(data);
        dispatch({
            type : 'FETCH_ALL_POSTS',
            payload : data,
        })
    } catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post)=>async(dispatch)=>{
    try {
        const {data} = await api.createPost(post);
        dispatch({
            type : 'CREATE_POST',
            payload : data,
        });
    } catch(error) {
        console.log(error.message)
    }
}

export const updatePost = (id,post)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({type : 'UPDATE_POST', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
}

export const deletePost = (id)=>async(dispatch)=>{
    try {
         await api.deletePost(id);
        dispatch({type : 'DELETE_POST', payload : id});
    }
    catch(error){
        console.log(error);
    }
}