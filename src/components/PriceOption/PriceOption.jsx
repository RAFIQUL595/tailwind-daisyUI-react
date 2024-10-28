import PropTypes from "prop-types";
import Featur from "../Featur/Featur";
const PriceOption = ({ option }) => {
  console.log(option);
  const { name, price, features } = option;
  return (
    <div className="bg-slate-500 mb-5 flex flex-col rounded-xl md:mr-5 p-5 text-center">
      <h2>
        <span>{price}</span>
      </h2>
      <h2>{name}</h2>
      <div className="flex-grow">
      {
        features.map((featur , i)=> <Featur key={i} featur={featur}></Featur>)
      }
      </div>
      <button className="bg-blue-400 rounded-md p-3 mt-5 w-full hover:bg-blue-700 hover:text-white">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
