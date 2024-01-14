import "./Product.css";
import PropTypes from "prop-types";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", " 5 Programmable Buttons"],
    ["intuitive surface","designed for iPad Pro"],
    ["designed for ipad Pro","intuitive surface"],
    ["wireless","optical orientation"],
  ];
  return (
    // <div className="Product">
    //     <h3>{title}</h3>
    //     <h5>{price}</h5>
    //     {price>3000 ? <p>Discount of 5%</p>:<a href='#'>Get Discount</a>}
    // </div>
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Product;
