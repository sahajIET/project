import React from 'react'
import CardComponent from './TailwindComponents/CardComponent'
import Header from './TailwindComponents/Header'
import Profile from './TailwindComponents/Profile'
import postsdata from './postsdata.json'
const App = () => {
  return (
    <div className='grid grid-cols-[3fr_1fr] bg-white'>
        <div>
            <Header/>
            <div className='bg-[#fafcfe] p-5 grid grid-cols-3 gap-6'>
                {postsdata.map((p,idx)=><CardComponent key={idx} data={p}/>)}
            </div>
        </div>
        <div className=''>
          <Profile/>
        </div>
    </div>
  )
}

export default App