import React from 'react'
import {BiDotsHorizontal} from 'react-icons/bi';
import {FcLikePlaceholder, FcLike} from 'react-icons/fc';
import {IoMdPaperPlane} from 'react-icons/io';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { likePost } from '../actions/posts';
import moment from 'moment';




const CardComponent = ({post,setCurrentId,currentId}) => {
  const dispatch = useDispatch();
  // const classes = useStyles();
  
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <div className='text-lg'><AiFillHeart  />&nbsp;{post?.likes?.length > 2 ? `You and ${post?.likes?.length - 1} others` : `${post?.likes?.length} like${post?.likes?.length > 1 ? 's' : ''}` }</div>
        ) : (
          <><AiOutlineHeart  />&nbsp;{post?.likes?.length} {post?.likes?.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><AiOutlineHeart  />&nbsp;Like</>;
  };

  const handleShare = ()=>{
    window.navigator.share({
      text: 'CHECK IT OUT',
      url: window.location.href,
    })
  }


  return (
    <div className='w-full font-nunito px-1 py-3 shadow-sm rounded-2xl bg-white'>
        <div className='flex justify-between items-center  px-3'>
            <div className='flex items-center gap-2'>
                {/* <div className='w-[35px] h-[35px] bg-gray-100 rounded-full' style={{background : `url(${post?.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}) center center/cover`}}></div> */}
                <div>
                <div className='text-base font-semibold'>{post?.name}</div>
                <div className='text-xs opacity-50'>{moment(post.createdAt).fromNow()}</div>
                </div>
            </div>
            <div className=''><BiDotsHorizontal/></div>
        </div>
        <div className='mt-4 rounded-xl w-full h-[200px] bg-gray-200' style={{background : `url(${post?.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}) center center/cover`}}></div>
        <div className='px-3 flex mt-3 items-center cursor-pointer gap-2'>
          <div onClick={()=>dispatch(likePost(post._id))}>{post?.likes?.length > 0?(
          post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))? <div className=''><AiFillHeart size={25} color='#1da1f2'  /></div>:<div className='text-lg'><AiOutlineHeart size={25}  /></div>
        ):(
          <><AiOutlineHeart  size={25}/></>
        )}</div><IoMdPaperPlane className='hover:text-[#1da1f2] transition-all' onClick={handleShare} size={25}/></div>
        <div className='px-3 mt-3'>{post?.likes?.length || 0} Like
        {(post?.likes?.length || 0)>1?'s':''}</div>
        <div className='px-3 mt-2 text-xs text-gray-500'>#{post?.tags}</div>
        <div className='px-3 text-sm mt-1  font-semibo text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae! <span className='font-semibold'>(more)</span></div>
    </div>
  )
}

export default CardComponent