import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import RootContainer from './containers/rootContainer'
import axiosConfig from './common/axios.config'
import './styles/normalize.css'
import './styles/index.css'

axiosConfig()

ReactDOM.render(<RootContainer />, document.querySelector('#root'))
