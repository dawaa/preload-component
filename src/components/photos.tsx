// external
import * as React  from 'react'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'

// internal
import PhotosList       from './photosList'
import preloadComponent from '../preloadComponent'
import { Photo }        from '../interfaces'

interface Props {
  photos: Photo[]
}

interface stateToProps {
  photos: Photo[]
}

interface dispatchToProps {}



class Photos extends React.Component<Props, void> {

  static contextTypes = {
    fetchPhotosDone: PropTypes.func
  }

  public render() {
    const { photos } = this.props

    return (
      <div>
        <PhotosList photos={ photos } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.api.photos
})

const mapDispatchToProps = dispatch => ({})

const url = 'https://jsonplaceholder.typicode.com/photos'
const preloadCallback = function(res: Photo[]) {
  // Either set it to our state for this component
  // this.setState({ preload: res })
  // Or send it to our store
  const { fetchPhotosDone } = this.context

  fetchPhotosDone( res )
}

export default connect
  <stateToProps, dispatchToProps>
    ( mapStateToProps, mapDispatchToProps )( preloadComponent( url, preloadCallback )( Photos ) )
