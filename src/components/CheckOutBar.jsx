import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function CheckOutBar(props) {
  const { cartItems } = props;
  if (cartItems.length) {
    let names = "",
      amount = 0;
    cartItems.forEach(item => {
      const { itemname = "", price = 0, quantity = 0 } = item;
      amount = amount + quantity * price;
      names = names + `${quantity} X ${itemname}, `;
    });
    return (
      <div className="CheckOutBar center">
        <div className="app-container CheckOutBar_wraper">
          <div className="items_title">{names}</div>
          <div className="total">
            <div className="amount">Total:₹ {amount}</div>
            <Link to="/cart">
              <Button
                size="sm"
                outline
                color="warning"
                className="checkout-btn"
              >
                CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.userReducer.cartItems
  };
};
export default connect(mapStateToProps)(CheckOutBar);
