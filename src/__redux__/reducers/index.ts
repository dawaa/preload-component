// external
import { combineReducers, Reducer } from 'redux'

// internal
import { ApplicationState } from '../ApplicationState'

// internal
import api from './api'

const rootReducers = combineReducers<ApplicationState>({
  api
})

export default rootReducers
