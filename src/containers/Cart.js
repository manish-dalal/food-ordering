import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import getImage from "utils/getImage";
import AddButton from "components/AddButton";

const Cart = props => {
  const { dispatch, cartItems } = props;

  let amount = 0;
  cartItems.map(item => {
    const { price = 0, quantity = 0 } = item;
    amount = amount + quantity * price;
  });
  let currentDate = new Date();

  return (
    <div className="Cart center">
      <div className="Cart_body">
        <h5 className="Cart_body_title">Your Order Details</h5>
        <div className="Cart_card">
          <div className="Cart_card_row theme_color">
            <h5>Buffet</h5>
            <div>
              <div className="date-title">Date</div>
              <div>
                {currentDate.getDate()}-{currentDate.getMonth() + 1}-
                {currentDate.getFullYear()}
              </div>
            </div>
          </div>
          {cartItems.map((item, index) => {
            const { itemname = "", price = 0, quantity = 0 } = item;

            return (
              <div className="Cart_card_row" key={index}>
                <div>
                  <div>{itemname}</div>
                  <div className="description">
                    {quantity} x ₹{price}
                  </div>
                </div>
                <div>
                  <AddButton item={item} />
                  <div className="description" style={{ textAlign: "end" }}>
                    ₹ {(quantity * price).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="Cart_card_row">
            <div>
              <div>Sub Total</div>
              <div className="description">Taxes</div>
            </div>
            <div>
              <div>₹ {amount.toFixed(2)}</div>
              <div className="description" style={{ textAlign: "end" }}>
                ₹ {(0).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="Cart_card_row grand-total">
            <h5>Grand Total</h5>
            <h5> ₹ {amount.toFixed(2)}</h5>
          </div>
          <div className="center">
            <Button outline color="warning" className="confirm-btn center">
              CONFIRM ORDER
            </Button>
          </div>
          <img src={getImage("cartFooter")} alt="cart" className="cartFooter" />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    cartItems: state.userReducer.cartItems
  };
};
export default connect(mapStateToProps)(Cart);
