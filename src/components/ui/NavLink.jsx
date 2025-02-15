import Link from "next/link";
import PropTypes from "prop-types";

/**
 * A reusable navigation link component with active state styling.
 *
 * @param {Object} props - The component props.
 * @param {string} props.href - The URL to navigate to.
 * @param {string} props.label - The text to display for the link.
 * @param {boolean} props.isActive - Whether the link is currently active.
 * @returns {JSX.Element} The rendered navigation link.
 */
const NavLink = ({ href, label, isActive }) => {
  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "bg-blue-500 px-6 py-2 rounded-full text-white"
          : "bg-gray-300 px-6 py-2 rounded-full text-gray-900"
      } text-sm hover:bg-blue-400 transition-colors duration-200`}
    >
      {label}
    </Link>
  );
};

// PropTypes for type-checking
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavLink;
