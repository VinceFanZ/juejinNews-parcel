import React from 'react'
import ReactDOM from 'react-dom'
import RootContainer from './containers/rootContainer'
import axiosConfig from './common/axios.config'
import './styles/normalize.css'
import './styles/index.css'

axiosConfig()

ReactDOM.render(
  <RootContainer />,
  document.querySelector('#root')
)

if (module.hot) {
  module.hot.accept('./containers/rootContainer.js', () => {
    /* eslint-disable global-require */
    const NextRootContainer = require('./containers/rootContainer.js').default
    ReactDOM.render(
      <NextRootContainer />,
      document.querySelector('#root')
    )
  })
}
