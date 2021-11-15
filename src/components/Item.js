import React, { useState } from "react";
import "../styles/item.css";

export const Item = ({ product }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="item">
      <div className="item-image">
        {product.sold && <div className="sold">Sold</div>}
        <img
          className="product-img"
          src={product.img}
          alt={product.description}
        />
        <button onClick={() => setLike(!like)} className="like-button">
          <img
            alt=""
            className="like-icon"
            src={like ? "heart-fill.svg" : "heart.svg"}
          />
        </button>
      </div>
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.size}</p>
      <p style={{ fontWeight: "bold" }}>£{product.price}</p>
    </div>
  );
};
