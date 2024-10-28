import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-red-600 hover:p-2 hover:text-center hover:rounded-xl">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Link;
