import React from 'react'

const Post = ({ data }) => {
  //  console.log(data)
  return (
    <div className='post-item'>
       <img src={data.image.url} alt={data.title} />
    </div>
  )
}

export default Post