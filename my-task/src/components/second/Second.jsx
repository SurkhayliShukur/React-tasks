import PropTypes from 'prop-types';
import Title from '../title'
import Third from '../third/Third'

const Second = ({person}) => {
  return (
      <div className='parent child'>
        <Title classnames="title2" text="Second Component" />
        <p>Email: {person.email}</p>
        <p>Phone Number: {person.phoneNumber}</p>
        <Third hobbies={person.hobbies} married={person.married} />
      </div>
  )
}

export default Second

Second.propTypes = {
    personInfo: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      married: PropTypes.bool.isRequired,
      hobbies: PropTypes.array.isRequired,
    }).isRequired,
  };
