import React from 'react'
import PostItem from './post-item'
import Masonry from 'react-masonry-component'

const RenderPostItem = ({ data, clickLikeBtn }) => {
  const posts = data.posts
  const postsData = posts.map(post => (
    <PostItem key={post._id} post={post} clickLikeBtn={clickLikeBtn} />
  ))
  return <div>{postsData}</div>
}

const Posts = ({ posts, clickLikeBtn }) => {
  const options = {
    percentPosition: true,
    itemSelector: '.postItem',
    columnWidth: '.item-sizer',
  }
  return (
    <div className="posts">
      <Masonry options={options}>
        <div className="item-sizer" />
        <RenderPostItem data={posts} clickLikeBtn={clickLikeBtn} />
      </Masonry>
    </div>
  )
}

export default Posts
