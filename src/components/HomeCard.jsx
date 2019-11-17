import React from "react";

import AddButton from "./AddButton";

export default function HomeCard(props) {
  const { item } = props;
  const { itemname = "", price = 0 } = item;
  return (
    <div className="card" key={props.index}>
      <div className="card_wraper">
        <div className="card_content">
          <div className="title">
            <div>{itemname}</div>
            <div>₹ {price}</div>
          </div>
          <AddButton item={item} />
        </div>
      </div>
    </div>
  );
}
