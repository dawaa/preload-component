// internal
import { Photo } from '../../interfaces'

export const FETCH_PHOTOS_DONE = 'FETCH_PHOTOS_DONE'

type FetchPhotosDoneAction = {
  type    : typeof FETCH_PHOTOS_DONE,
  payload : Photo[]
}

export const fetchPhotosDone =
  (payload): FetchPhotosDoneAction => ({
    type : FETCH_PHOTOS_DONE,
    payload
  })
