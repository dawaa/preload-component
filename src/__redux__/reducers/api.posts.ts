// external
import { Reducer } from 'redux'

// internal
import { ApplicationState } from '../../__redux__/ApplicationState'
import { FETCH_POSTS_DONE } from '../actions/posts'


const initialState = []

const postsReducer = 
  (state = initialState, action) => {

    switch ( action.type ) {
      case FETCH_POSTS_DONE:
        return (<any>Object).assign(
          [],
          action.payload
        )

      default:
        return state
    }

}

export default postsReducer
