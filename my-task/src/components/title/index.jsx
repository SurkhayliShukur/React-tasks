import React from 'react'
import PropTypes from 'prop-types'

const Title = ({text,classnames}) => {
  return (
    <div>
       <h2 className={classnames}>{text}</h2>
    </div>
  )
}

export default Title

Title.propTypes = {
    text: PropTypes.string.isRequired,
  };
