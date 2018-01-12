import React from 'react'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter } from 'react-router-redux'

import PropTypes from 'prop-types'
import configureStore from '../store/configureStore'
import asyncComponent from '../components/asyncComponent'
import nav from '../styles/nav.css'

const All = asyncComponent(() => import('../views/all'))
const Frontend = asyncComponent(() => import('../views/frontend'))
const Freebie = asyncComponent(() => import('../views/freebie'))
const Other = asyncComponent(() => import('../views/other.js'))

const history = createHistory()
const store = configureStore(history)

const rootContainer = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <nav className={nav.nav}>
          <NavRoute activeOnlyWhenExact to="/" label="全部" />
          <NavRoute to="/frontend" label="前端" />
          <NavRoute to="/freebie" label="工具资源" />
        </nav>

        <Route exact path="/" component={All} />
        <Route path="/frontend" component={Frontend} />
        <Route path="/freebie" component={Freebie} />
        <Route path="/other" component={Other} />
      </div>
    </ConnectedRouter>
  </Provider>
)

const NavRoute = ({ activeOnlyWhenExact, to, label }) => (
  <Route exact={activeOnlyWhenExact} path={to}>
    {({ match }) => <NavItem match={match} to={to} label={label} />}
  </Route>
)

const NavItem = ({ match, to, label }) => (
  <div className={`${nav.item} ${match ? nav.active : ''}`}>
    <Link to={to}>{label}</Link>
  </div>
)

NavRoute.propTypes = {
  activeOnlyWhenExact: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string,
}

NavRoute.defaultProps = {
  activeOnlyWhenExact: false,
  to: '/',
  label: '',
}

NavItem.propTypes = {
  match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  to: PropTypes.string,
  label: PropTypes.string,
}

NavItem.defaultProps = {
  match: {},
  to: '/',
  label: '',
}

export default rootContainer
