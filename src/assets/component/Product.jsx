import PropTypes from "prop-types";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ title, image, qty, price, id, removeProduct}) => {
    const navigate = useNavigate();
    return (
        <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <div className="product-details">
            <p className="product-title">{title}</p>
            <p className="product-qty">Quantity: {qty}</p>
            <p className="product-price">Price: ${price}</p>
        </div>
        <button onClick={() => removeProduct(id)} >Delete</button>
        <button onClick={() => {
            navigate(`/add-product?edit=true&prodId=${id}`,{ 
                state: { title, image, qty, price, id },
         });
        }}
        >
        Edit</button>
        </div>
    );
};

Product.propTypes = {
    title:PropTypes.string,
    image:PropTypes.string,
    qty:PropTypes.string,
    price:PropTypes.string,
    removeProduct:PropTypes.func,
    id:PropTypes.string,
}

export default Product;