import React, { Component } from 'react'

export default function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    state = {
      component: null,
    }

    componentDidMount () {
      this.onMount()
    }

    async onMount () {
      const { default: component } = await importComponent()
      this.setState({
        component,
      })
    }

    render () {
      const C = this.state.component

      return C ? <C {...this.props} /> : <div> Loading ......</div>
    }
  }

  return AsyncComponent
}
