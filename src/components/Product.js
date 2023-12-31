import "./Product.css";
import React from "react";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  
  const [ state, dispatch ] = useStateValue();

  const addToBasket = () => {

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        image,
        price,
        rating,
      },
    });
  }

  return (
    <div>
      <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill().map((_, i) => (
                  <p>⭐</p>
                ))
              }
            </div>
        </div>

        <img src={image} alt="product" className="product__image" />

        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  )
};

export default Product;
