import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

export default function List() {
  const items = useSelector((state) => state.bicycle.items);
  return (
    <div>
      {items.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
}
