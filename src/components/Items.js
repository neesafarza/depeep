import React, { useEffect, useState } from "react";
import { getItems } from "../ApiService";
import { Item } from "./Item";
import "../styles/itemList.css";
import { AppBar } from "./AppBar";

export const ItemList = () => {
  const [items, setItems] = useState("");
  const [error, setError] = useState(false);

  const [hideSoldItem, setHideSoldItems] = useState(false);

  useEffect(() => {
    getItems()
      .then((res) => {
        setError(false);
        setItems(res);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  const displayProduct = () =>
    items.map((product) => {
      if (hideSoldItem) {
        return (
          !product.sold && <Item product={product} key={product.id}></Item>
        );
      }
      return <Item product={product} key={product.id}></Item>;
    });

  return (
    <div className="items-page">
      <AppBar
        items={items}
        hideSoldItem={hideSoldItem}
        setHideSoldItems={setHideSoldItems}
      />
      {error ? (
        <div className="error-container" data-testid="get-items-error">
          An error has occured getting the latest items. Please try again later.
        </div>
      ) : (
        <div className="items-list" data-testid="item-list">
          {items ? displayProduct() : <div>Loading....</div>}
        </div>
      )}
    </div>
  );
};
