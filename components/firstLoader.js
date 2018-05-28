import React from 'react'
import { branch, renderComponent } from 'recompose'

const nowLoading = () => (
  <div className="loading loading--init">
    <p className="nowLoading">Now Loading</p>
  </div>
)

const nowLoadingFadeOut = () => (
  <div className="loading loading--init loading--fadeOut">
    <p className="nowLoading">Now Loading</p>
  </div>
)

const isFirstLoading = ({ loadingFirst }) => {
  if (loadingFirst.isLoading) {
    return true
  }
  return false
}

const firstLoaderWithBranch = branch(isFirstLoading, renderComponent(nowLoading), component => component)

export default firstLoaderWithBranch(nowLoadingFadeOut)
