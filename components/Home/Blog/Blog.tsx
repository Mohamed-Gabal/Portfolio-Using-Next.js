import React from 'react'
import BlogCard from './BlogCard';

const Blog = () => {
  // Data For component BlogCard
  const reaptBlogs = [
    {id: 1, image: '/images/b1.jpg', title: 'Learn how to build an amazing Portfolio website using next js',},
    {id: 2, image: '/images/b2.jpg', title: 'Learn how to build an amazing Blog website using next js',},
    {id: 3, image: '/images/b1.jpg', title: 'Learn how to build an amazing Social Media using next js',},
  ]
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        My Latest <span className='text-cyan-200'>Blogs</span>
      </h1>
      <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='300' className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16'>
        {reaptBlogs.map((blog) => (
          // import component BlogCard
          <BlogCard key={blog.id} {...blog}/>
        ))}
      </div>
    </div>
  )
}
export default Blog;