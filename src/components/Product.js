import "./Product.css";
import React from "react";

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">⭐⭐⭐⭐⭐</div>
        </div>

        <img src={image} alt="product" className="product__image" />

        <button>Add to basket</button>
      </div>
    </div>
  )
};

export default Product;
