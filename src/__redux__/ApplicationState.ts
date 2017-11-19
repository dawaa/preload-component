// internal
import { Post, Photo } from '../interfaces'

export interface ApplicationState {
  api : {
    posts  : Post[],
    photos : Photo[],
  },
}
