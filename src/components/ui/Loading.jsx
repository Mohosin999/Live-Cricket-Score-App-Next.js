import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";

/**
 * Loading component that displays a spinner and a text.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display below the spinner.
 * @returns {JSX.Element} The rendered Loading component.
 */
const Loading = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <FaSpinner className="animate-spin h-8 w-8 text-blue-500" />
      <p className="text-center text-gray-500">{text}</p>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loading;
