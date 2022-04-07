import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products, loading }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => {
          return (
            <div className="col" key={index}>
              <Item
                id={product.id}
                description={product.description}
                price={product.price}
                stock={product.stock}
                pictureUrl={product.pictureUrl}
                loading={loading}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
