import React, { useState } from "react";
import InvoiceForm from "../InvoiceForm/InvoiceForm";
import "./Invoice_styles.css";

const Invoice = ({ item }) => {
  const [formClick, setFormClick] = useState(false);
  const handleClick = () => {
    setFormClick(!formClick);
  };
  return (
    <>
      <li
        className="invoice-item-container"
        key={item.id}
        onClick={handleClick}
      >
        <span className="invoice-customer invoice-item">{item.customer}</span>
        <span className="invoice-id invoice-item">{item.id}</span>
        <span className="invoice-amount invoice-item">{item.amount}</span>
        <span className="invoice-created invoice-item">{item.created}</span>
        <span className="invoice-due invoice-item">{item.due}</span>
        <span className="invoice-note invoice-item">{item.note}</span>
        <span
          className={
            `invoice-status invoice-item ` +
            (item.status === "Due"
              ? "due"
              : item.status === "Paid"
              ? "paid"
              : "pending")
          }
        >
          {item.status}
        </span>
      </li>
      {formClick ? (
        <InvoiceForm handleClick={handleClick} itemInfo={item} />
      ) : null}
    </>
  );
};

export default Invoice;
