import React from 'react'
import PostItem from './post-item'
import Masonry from 'react-masonry-component'

const RenderPostItem = ({ posts }) => {
  let postsData = []
  for (let i = 0, len = posts.length; i < len; i += 1) {
    postsData.push(<PostItem key={posts[i]._id} post={posts[i]} />)
  }
  return (<div>{ postsData }</div>)
}

const Posts = ({rootProps}) => {
  const options = {
    percentPosition: true,
    itemSelector: '.postItem',
    columnWidth: '.item-sizer',
  }
  return (
    <div className="posts">
      <Masonry options={options}>
        <div className="item-sizer" />
        <RenderPostItem posts={rootProps.posts} />
      </Masonry>
    </div>
  )
}


export default Posts
