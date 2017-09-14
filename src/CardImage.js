import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './CardImage.css'

const CardImage = (props) => {
  const { animation, width, src, title, description, shadow } = props
  let cardClassName = classNames({
    'card-container': true,
    shadow: shadow
  })
  let imgClassName = classNames(`img-${animation}`)

  return (
    <div className={cardClassName} style={{width: `${width}px`}}>
      <div className="img-container">
        <div className={imgClassName}>
          <img src={src} alt={title} />
        </div>
      </div>
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

CardImage.propTypes = {
  animation: PropTypes.string,
  width: PropTypes.number,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  shadow: PropTypes.bool
}

CardImage.defaultProps = {
  animation: '',
  width: 200,
  src: '',
  title: '',
  description: '',
  shadow: false
}

export default CardImage
