import React from 'react'
import PropTypes from 'prop-types'
import item from '../styles/components/item.css'

class Item extends React.PureComponent {
  static defaultProps = {
    originalUrl: '',
    title: '',
    content: '',
    collectionCount: '',
    commentsCount: '',
    username: '',
    avatarLarge: '',
  }
  static propTypes = {
    originalUrl: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    collectionCount: PropTypes.number,
    commentsCount: PropTypes.number,
    username: PropTypes.string,
    avatarLarge: PropTypes.string,
  }
  state = {}

  render () {
    const {
      originalUrl,
      title,
      content,
      collectionCount,
      commentsCount,
      username,
      avatarLarge,
    } = this.props
    return (
      <section className={item.box}>
        <header className={item.header}>
          {/* <img className={item.face} src={avatarLarge} alt="" /> */}
          <span style={{ display: 'none' }}>{avatarLarge}</span>
          <span>{username}</span>
        </header>
        <section className={item.center}>
          <a href={originalUrl}>
            <div>{title}</div>
            <div>{content}</div>
          </a>
        </section>
        <footer className={item.footer}>
          <span>关注：{collectionCount}</span>
          <span>评论: {commentsCount}</span>
        </footer>
      </section>
    )
  }
}

export default Item
