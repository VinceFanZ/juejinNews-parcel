import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

@connect(
  (state) => ({
    number: state.count.number,
  }),
  { increase, decrease },
)
class Other extends PureComponent {
  static defaultProps = {
    number: 0,
    increase: () => {},
    decrease: () => {},
  }

  static propTypes = {
    number: PropTypes.number,
    increase: PropTypes.func,
    decrease: PropTypes.func,
  }

  render () {
    const { number, increase: inc, decrease: dec } = this.props
    return (
      <div>
        Some state changes:
        {number}
        <button onClick={() => inc(1)}>Increase</button>
        <button onClick={() => dec(1)}>Decrease</button>
      </div>
    )
  }
}

export default Other
