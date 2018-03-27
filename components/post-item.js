import React from 'react'

const RenderImage = ({post}) => {
  let imgPath
  if (post.filename) {
    /* eslint no-underscore-dangle: 0 */
    imgPath = `/userData/${post.author._id}/img/${post.filename}`
    // imgPath = `/userData/1/img/${post.filename}`
  } else {
    imgPath = post.url
  }
  return <img src={imgPath} alt={post.title} />
}

const PostItem = ({ post }) => {

  return (
    <div className="postItem">
      <div className="postItem__wrapper">
        <h2 className="postItem__title">{post.title}</h2>
      </div>
      <div className="postItem__image">
        <RenderImage post={post} />
      </div>
    </div>
  )
}

export default PostItem
