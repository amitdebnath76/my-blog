import React, { useState } from 'react'
import { blog_data } from '../Assets/assets'
import BlogItem from './BlogItem'

const BlogList = () => {
  const [menu,setMenu] = useState('All')
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=> setMenu('All')} className={ menu==='All'?'bg-black text-white py-1 px-4 rounded-sm':''}>All</button>
            <button onClick={()=> setMenu('Technology')} className={ menu==='Technology'?'bg-black text-white py-1 px-4 rounded-sm':''}>Technology</button>
            <button onClick={()=> setMenu('Startup')} className={ menu==='Startup'?'bg-black text-white py-1 px-4 rounded-sm':''}>StartUp</button>
            <button onClick={()=> setMenu('Lifestyle')} className={ menu==='Lifestyle'?'bg-black text-white py-1 px-4 rounded-sm':''}>LifeStyle</button>

        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {
               blog_data.filter((item)=>menu==="All"?true:item.category===menu).map((item,index)=>{return <BlogItem title={item.title} description={item.description} category={item.category} image={item.image} key={index}/>}) 
            }

        </div>
    </div>
  )
}

export default BlogList