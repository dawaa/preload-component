// external
import * as React from 'react'

// internal
import { Post } from '../interfaces'

interface Props {
  posts: Post[]
}

const postsList: React.StatelessComponent<Props> = (props) => (
  <div>
    <h1>Posts</h1>
    {
      props.posts.length > 0
      ?
        props.posts.map((post: Post, i: number) => (
          <div key={ i }>
            <h3>{ post.title }</h3>
            <p>{ post.body }</p>
          </div>
        ))
      :
        false
    }
  </div>
)

export default postsList
