import React from 'react'
import {BiDotsHorizontal} from 'react-icons/bi';
import {FcLikePlaceholder, FcLike} from 'react-icons/fc';
import {IoMdPaperPlane} from 'react-icons/io';
import {AiOutlineHeart} from 'react-icons/ai';
const CardComponent = ({data}) => {
  return (
    <div className='w-full font-nunito px-1 py-3 shadow-sm rounded-2xl bg-white'>
        <div className='flex justify-between items-center  px-3'>
            <div className='flex items-center gap-2'>
                <div className='w-[35px] h-[35px] bg-gray-100 rounded-full' style={{background : `url(${data?.profileImg}) center center/cover`}}></div>
                <div>
                <div className='text-base font-semibold'>{data?.username}</div>
                <div className='text-xs opacity-50'>{data?.location}</div>
                </div>
            </div>
            <div className=''><BiDotsHorizontal/></div>
        </div>
        <div className='mt-4 rounded-xl w-full h-[200px] bg-gray-200' style={{background : `url(${data?.img}) center center/cover`}}></div>
        <div className='px-3 flex mt-3 items-center gap-2'><AiOutlineHeart size={25}/> <IoMdPaperPlane size={25}/></div>
        <div className='px-3 text-sm mt-3 text-gray-600'>Liked by You and <span className='font-semibold text-black'>{data?.likes} others</span></div>
        <div className='px-3 text-sm mt-2  font-semibo text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae! <span className='font-semibold'>(more)</span></div>
    </div>
  )
}

export default CardComponent