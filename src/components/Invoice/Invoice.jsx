import React from "react";
import "./Invoice_styles.css";

const Invoice = ({ invoiceListInfo }) => {
  console.log(invoiceListInfo);
  return (
    <>
      {invoiceListInfo.map((item) => {
        return (
          <li className="invoice-item-container" key={item.id}>
            <span className="invoice-customer invoice-item">
              {item.customer}
            </span>
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
        );
      })}
    </>
  );
};

export default Invoice;
