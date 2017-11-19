// external
import { combineReducers, Reducer } from 'redux'

// internal
import posts           from './api.posts'
import photos          from './api.photos'

const reducers = combineReducers({
  posts,
  photos,
})

export default reducers
