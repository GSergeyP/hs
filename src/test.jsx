import PropTypes from 'prop-types';

const Test = ({children}) => {
  return <div>{children}</div>
}

Test.propTypes = {
  string: PropTypes.string.isRequired,
  number: PropTypes.number,
  bool: PropTypes.bool,
  //obj: PropTypes.object,
  obj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  }),
  //array: PropTypes.array
  //array: PropTypes.arrayOf(PropTypes.number),
  array: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  })),
  oneOf: PropTypes.oneOf(['one', 'two']),
  func: PropTypes.func,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node]
    ),
}


export default Test;