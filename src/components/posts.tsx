// external
import * as React  from 'react'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'

// internal
import PostsList        from './postsList'
import preloadComponent from '../preloadComponent'
import { Post }         from '../interfaces'

interface Props {
  posts: Post[]
}

interface stateToProps {
  posts: Post[]
}

interface dispatchToProps {}



class Posts extends React.Component<Props, void> {

  static contextTypes = {
    fetchPostsDone: PropTypes.func
  }

  public render() {
    const { posts } = this.props

    return (
      <div>
        <PostsList posts={ posts } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.api.posts
})

const mapDispatchToProps = dispatch => ({})

const url = 'https://jsonplaceholder.typicode.com/posts'
const preloadCallback = function(res: Post[]) {
  // Either set it to our state for this component
  // this.setState({ preload: res })
  // Or send it to our store
  const { fetchPostsDone } = this.context

  fetchPostsDone( res )
}

export default connect
  <stateToProps, dispatchToProps>
    ( mapStateToProps, mapDispatchToProps )( preloadComponent( url, preloadCallback )( Posts ) )
