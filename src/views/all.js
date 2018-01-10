import React from 'react'
import PropTypes from 'prop-types'
import service from '../service'
import Loading from '../components/Loading'
import Item from '../components/Item'

class All extends React.PureComponent {
  static defaultProps = {
    history: {}
  }
  static propTypes = {
    history: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.onClickToFrontend = this.onClickToFrontend.bind(this)
  }

  state = {
    list: [],
    isLoading: true,
  }

  componentDidMount () {
    this.getData()
  }

  componentWillUnmount () {
  }

  onClickToFrontend () {
    this.props.history.push('/frontend')
  }

  async getData () {
    const data = await service.getTimelineData()
    this.setState({
      list: data.entrylist,
      isLoading: false,
    })
  }

  itemsRender () {
    const { list } = this.state
    if (!list) {
      return null
    }
    return list.map(item => (
      <Item
        key={item.objectId}
        originalUrl={item.originalUrl}
        title={item.title}
        content={item.content}
        collectionCount={item.collectionCount}
        commentsCount={item.commentsCount}
        username={item.user.username}
        avatarLarge={item.user.avatarLarge}
      />)
    )
  }

  render () {
    return (
      <div>
        <burron onClick={this.onClickToFrontend}>to frontend</burron>
        {
          this.state.isLoading && <Loading />
        }
        {
          this.itemsRender()
        }
      </div>
    )
  }
}

export default All
