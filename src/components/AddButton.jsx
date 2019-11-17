import React, { useEffect } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { connect } from "react-redux";
import findIndex from "lodash/findIndex";

import {
  addItem,
  incrementQuantity,
  decrementQuantity
} from "redux/actions/user";

function AddButton(props) {
  const { item, dispatch, cartItems } = props;
  const { itemname = "", price = 0, quantity = 0 } = item;
  console.log("quantity", quantity);

  useEffect(() => {}, [itemname]);

  const add = () => {
    dispatch(addItem(item));
  };
  const increment = () => {
    dispatch(incrementQuantity(item));
  };
  const decrement = () => {
    dispatch(decrementQuantity(item));
  };
  const itemIndex = findIndex(cartItems, {
    itemname: itemname,
    price: price
  });

  if (itemIndex !== -1 && cartItems[itemIndex].quantity) {
    return (
      <ButtonGroup className="group-btn center">
        <Button
          size="sm"
          className="dec-btn center group-btn-common"
          outline
          color="warning"
          onClick={decrement}
        >
          -
        </Button>
        <Button
          size="sm"
          outline
          color="warning"
          disabled
          className="quantity-btn center group-btn-common"
        >
          {cartItems[itemIndex].quantity}
        </Button>
        <Button
          size="sm"
          className="inc-btn center group-btn-common"
          outline
          color="warning"
          onClick={increment}
        >
          +
        </Button>
      </ButtonGroup>
    );
  } else {
    return (
      <Button
        outline
        color="warning"
        size="sm"
        className="add-btn center"
        onClick={add}
      >
        Add
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.userReducer.cartItems
  };
};
export default connect(mapStateToProps)(AddButton);
