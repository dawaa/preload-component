// external
import * as React from 'react'

// internal
import { Photo } from '../interfaces'

interface Props {
  photos: Photo[]
}

const photosList: React.StatelessComponent<Props> = (props) => (
  <div>
    <h1>Photos</h1>
    {
      props.photos.length > 0
      ?
        props.photos.map((photo: Photo, i: number) => (
          <div key={ i }>
            <h3>{ photo.title }</h3>
            <img src={ photo.thumbnailUrl }></img>
          </div>
        ))
      :
        false
    }
  </div>
)

export default photosList
