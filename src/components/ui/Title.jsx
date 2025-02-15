import PropTypes from "prop-types";

/**
 * Title component that displays a title.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title text to display.
 * @returns {JSX.Element} The rendered Title component.
 */
const Title = ({ title }) => {
  return <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
