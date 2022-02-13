import React from 'react'

const Post = ({ data }) => {
    console.log(data)
  return (
    <div className='post-item'>
       <img src={data.image.url} />
    </div>
  )
}

export default Post