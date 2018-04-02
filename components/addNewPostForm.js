import React from 'react'

const AddNewPostForm = props => {
  return (
    <div className="AddNewPost">
      <form>
        <label htmlFor="#title">
          <span>Title:</span>
          <input id="title" type="text" placeholder="So pretty cats" />
        </label>
      </form>
    </div>
  )
}
