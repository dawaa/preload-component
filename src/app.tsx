// external
import * as React             from 'react'
import {
  connect,
  DispatchProp,
} from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes              from 'prop-types'

// internal
import { ApplicationState } from './__redux__/ApplicationState'
import { Post }             from './interfaces'
import Posts                from './components/posts'
import PostsList            from './components/postsList'
import Photos               from './components/photos'
import PhotosList           from './components/photosList'

// actions
import { fetchPostsDone }   from './__redux__/actions/posts'
import { fetchPhotosDone }  from './__redux__/actions/photos'

interface Props {
  posts           : Post[]
  fetchPostsDone  : Function
  fetchPhotosDone : Function
}

interface State {
  view : string
}

interface DispatchProps {
  fetchPostsDone  : Function
  fetchPhotosDone : Function
}

interface StateProps {}



class App extends React.Component
  <Props & DispatchProp<ApplicationState>, State> {

  static childContextTypes = {
    fetchPostsDone  : PropTypes.func,
    fetchPhotosDone : PropTypes.func,
  }

  public getChildContext() {
    const {
      fetchPostsDone,
      fetchPhotosDone,
    } = this.props

    return {
      fetchPostsDone,
      fetchPhotosDone,
    }
  }

  constructor(props) {
    super( props )

    this.changeView = this.changeView.bind( this )

    this.state = {
      view: 'posts'
    }
  }

  public changeView(e) {
    this.setState({ view: e.target.name })
  }

  public render() {
    const { posts } = this.props
    const { view }  = this.state

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}>
          <button
            name="posts"
            onClick={ this.changeView }>
            Posts
          </button>
          <button
            name="photos"
            onClick={ this.changeView }>
            Photos
          </button>
        </div>

        {
          view === 'posts'
          ? <Posts />
          : <Photos />
        }

      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState): StateProps => ({})

const mapDispatchToProps = (dispatch): DispatchProps => ({
  fetchPostsDone  : bindActionCreators(
    fetchPostsDone,
    dispatch
  ),
  fetchPhotosDone : bindActionCreators(
    fetchPhotosDone,
    dispatch
  ),
})

export default connect( mapStateToProps, mapDispatchToProps )( App )
