// external
import { Reducer } from 'redux'

// internal
import { ApplicationState }  from '../../__redux__/ApplicationState'
import { FETCH_PHOTOS_DONE } from '../actions/photos'


const initialState = []

const photosReducer =
  (state = initialState, action) => {

    switch ( action.type ) {
      case FETCH_PHOTOS_DONE:
        return (<any>Object).assign(
          [],
          action.payload.splice(1, 100)
        )

      default:
        return state
    }

}

export default photosReducer
