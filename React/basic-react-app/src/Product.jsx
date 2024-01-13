import './Product.css';
import PropTypes from 'prop-types';

function Product({title, price}){
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
        </div>
    );
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default Product;