import PropTypes from 'prop-types';

Input.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  bgColor: 'bg-input',
  textColor: 'text-darkgray',
  type: 'text',
  placeholder: '',
  padding: '',
  width: 'w-[328px]',
  height: 'h-[44px]',
};

export default function Input({ bgColor, textColor, type, name, padding, width, height, placeholder }) {
  return (
    <input
      className={`text-sm ${textColor} ${bgColor} ${width} ${height} p-2.5 ${padding} rounded-md mb-2 outline-none focus:border-2 focus:border-primary`}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    ></input>
  );
}
