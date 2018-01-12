import React from 'react'
import service from '../service'
import Loading from '../components/Loading'
import Item from '../components/Item'

class Frontend extends React.PureComponent {
  state = {
    list: [],
    isLoading: true,
  }

  componentDidMount () {
    this.getData()
  }

  componentWillUnmount () {}

  async getData () {
    const data = await service.getRankData('5562b415e4b00c57d9b94ac8')
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
    return list.map((item) => (
      <Item
        key={item.objectId}
        originalUrl={item.originalUrl}
        title={item.title}
        content={item.content}
        collectionCount={item.collectionCount}
        commentsCount={item.commentsCount}
        username={item.user.username}
        avatarLarge={item.user.avatarLarge}
      />
    ))
  }

  render () {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        {this.itemsRender()}
      </div>
    )
  }
}

export default Frontend
