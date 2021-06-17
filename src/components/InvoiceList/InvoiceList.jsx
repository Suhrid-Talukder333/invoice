import React, { useState, useEffect } from "react";
import Invoice from "../Invoice/Invoice";
import "./InvoiceList_styles.css";
import { connect } from "react-redux";

const InvoiceList = ({ state }) => {
  console.log(state);
  return (
    <>
      <ul className="invoice-list">
        <li className="invoice-header">
          <span className="invoice-customer invoice-item">Customer</span>
          <span className="invoice-id invoice-item">ID</span>
          <span className="invoice-amount invoice-item">Amount</span>
          <span className="invoice-created invoice-item">Created</span>
          <span className="invoice-due invoice-item">Due</span>
          <span className="invoice-note invoice-item">Note</span>
          <span className="invoice-status invoice-item">Status</span>
        </li>
        {state !== null
          ? state.map((item) => <Invoice key={item.id} item={item} />)
          : null}
      </ul>
    </>
  );
};

const mapDispatchToProps = (state) => {
  return { state };
};

export default connect(mapDispatchToProps, null)(InvoiceList);
