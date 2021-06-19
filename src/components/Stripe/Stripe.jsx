import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const Stripe = ({ price, handlePay }) => {
  const total = price * 100;
  const api =
    "pk_test_51ImwdFSFmIY4eaow2aMui0i2vZEkGrrhgEbfJ8gGlVVafzNp94ZydtaZRmy5av858buIVm2zWxSZzeWs12s1jP4Y00oSdZdyQs";
  return (
    <StripeCheckOut
      label="Pay now"
      name="Invoice"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={total}
      panelLabel="Pay now"
      stripeKey={api}
      token={handlePay}
    />
  );
};

export default Stripe;
