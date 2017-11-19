// internal
import { Post } from '../../interfaces'

export const FETCH_POSTS_DONE = 'FETCH_POSTS_DONE'

type FetchPostsDoneAction = {
  type    : typeof FETCH_POSTS_DONE,
  payload : Post[]
}

export const fetchPostsDone =
  (payload): FetchPostsDoneAction => ({
    type: FETCH_POSTS_DONE,
    payload
  })
