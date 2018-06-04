import branch from 'recompose/branch'
import renderNothing from 'recompose/renderNothing'
import postForm from './postForm'

const isOpenPostForm = (formControl) => {
  if (formControl.isPost) {
    return true
  }
  return false
}

const withPostFormCheck = branch(({ formControl }) => isOpenPostForm(formControl), component => component, renderNothing)

export default withPostFormCheck(postForm)
