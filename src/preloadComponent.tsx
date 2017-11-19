// external
import * as React  from 'react'
import { connect } from 'react-redux'
import PropTypes   from 'prop-types'

// internal
import {
  subscriptionShape,
  storeShape,
} from './__redux__/utils/propTypes'

const preload = (url, callback = undefined) => {
  const contextTypes = {
    'store'             : storeShape,
    'storeSubscription' : subscriptionShape,
  }

  const childContextTypes = {
    'storeSubscription' : subscriptionShape
  }

  return function wrapComponent(PreloadedComponent) {
    const userDefinedComponentDidMount = PreloadedComponent.prototype.componentDidMount


    PreloadedComponent.prototype.componentDidMount = async function() {
      const response = await fetch(url).then(response => response.json())

      if ( callback !== undefined ) {
        callback.apply( this, [ response ] )
      } else if ( typeof this.getPreload === 'function' ) {
        this.getPreload( response )
      } else {
        this.setState({ preload: response })
      }

      if ( typeof userDefinedComponentDidMount === 'function' ) {
        const cdm = userDefinedComponentDidMount.bind( this )
        cdm()
      }
    }

    class PreloadComponent extends React.Component<{}, {}> {
      store       : object;
      propsPassed : boolean;

      static contextTypes = contextTypes
      static propTypes    = contextTypes

      constructor(props, context) {
        super( props, context )

        this.propsPassed = Boolean( props.store )
        this.store       = props.store || context.store
      }

      public render() {
        return React.createElement( PreloadedComponent, { ...this.props } )
      }
    }

    return PreloadComponent
  }
}

export default preload
