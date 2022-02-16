import PropTypes from 'prop-types';

function Greeting(props) {
  const { greeting } = props;
  return <p>{greeting}</p>;
}

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default Greeting;
