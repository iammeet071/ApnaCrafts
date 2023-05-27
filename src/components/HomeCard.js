import React from "react";
import './homeCard.css'
import { useHistory } from 'react-router-dom'
const HomeCard = ({product,addToCart}) => {
	const history = useHistory();
  return (
    <div className="cards">
      <img
        src={product.image}
        alt="img"
		onClick={e=>{history.push(`/details/${product.id}`)}}
      />
      <h3>{product.name}</h3>
      <div className="card-price">
        <div className="card-amount">
          <h4>Price</h4>
          <p>Rs {product.price}</p>
        </div>
        <div className="buy-button">
          <button id={product.id} onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
