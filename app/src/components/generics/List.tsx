import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

//* "{}" o demekdir ki "T" bosh obyektden torenir ve az mehdudiyyet qoyuruq.
const List = <T extends string | number /*{}*/>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <p
            key={index}
            onClick={() => onClick(item)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default List;
