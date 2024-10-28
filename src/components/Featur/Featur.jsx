import PropTypes from "prop-types";

const Featur = ({featur}) => {
    return (
        <div>
            <p>{featur}</p>
        </div>
    );
};
Featur.propTypes = {
    featur: PropTypes.string,
  };
export default Featur;