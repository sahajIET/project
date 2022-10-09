import React from 'react'
import Logo from '../images/logo.png';
import {AiOutlineSearch} from 'react-icons/ai';

const SearchBar = ()=>{
    return (
        <div className='flex items-center relative'>
            <AiOutlineSearch className='absolute left-2 text-gray-500'/>
            <input className='w-[260px] py-2 px-10 bg-[#f6fafd] outline-none focus:shadow-lg transition-all rounded-md' placeholder='Search posts'/>
        </div>
    )
}

const Header = () => {
  return (
    <div className='p-4 font-nunito border-b-[1px] flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <img src={Logo} className='w-[40px] h-[40px]'/>
            <div className='text-xl font-[700]'><span className='text-red-600'>Popp</span><span className='text-blue-600'>Media</span></div>
        </div>
        <div className=''>
            <SearchBar/>
        </div>
    </div>
  )
}

export default Header