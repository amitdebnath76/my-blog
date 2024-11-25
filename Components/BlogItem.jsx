import Image from 'next/image'
import React from 'react'
import { assets, blog_data } from '../Assets/assets'

const BlogItem = () => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Image src={blog_data[0].image} alt='Blog_image' width={400} height={400} className='border-b border-black'></Image>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{blog_data[0].category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{blog_data[0].title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{blog_data[0].description}</p>
            <div className='inline-flex item-center py-2 font-semi-bold text-center'>
                Read More <Image src={assets.arrow} alt='' width={12} className='ml-4'></Image>
            </div>
        </div>
    </div>
  )
}

export default BlogItem