import React from 'react'
import PropTypes from 'prop-types'
import Title from '../title'

const Third = ({hobbies,married}) => {
  return (
    <div className='parent last'>
    <Title classnames= "title3" text="Third Component" />
    <p>Status: {married ? "Married" : "Single"}</p>
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  </div>
  )
}

export default Third

Third.propTypes = {
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
    married: PropTypes.bool.isRequired,
  };
