import React from 'react'
import PropTypes from 'prop-types'

import './loading.scss'
interface LoadingProps {
  show: boolean,
  text: string
}
// Loading组件

const Loading = (props: LoadingProps) => {
  const { show, text } = props
  return (
    <div className="loading-box" style={{ display: show ? 'block' : 'none' }}>
      <span className="loading">{text}</span>
    </div>
  )
}

Loading.defaultProps = {
  text: '努力加载中...',
  show: true
}

Loading.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string
}

export default Loading
