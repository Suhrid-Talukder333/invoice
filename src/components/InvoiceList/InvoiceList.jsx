import React, { useState, useEffect } from "react";
import Invoice from "../Invoice/Invoice";
import "./InvoiceList_styles.css";

const InvoiceList = () => {
  const [invoiceListInfo, setInvoiceListInfo] = useState(
    JSON.parse(localStorage.getItem("invoices-list"))
  );
  if (invoiceListInfo === undefined) {
    setInvoiceListInfo([]);
  }
  window.addEventListener("storage", () => {
    setInvoiceListInfo(JSON.parse(localStorage.getItem("invoices-list")));
  });

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
        {invoiceListInfo !== null
          ? invoiceListInfo.map((item) => <Invoice key={item.id} item={item} />)
          : null}
      </ul>
    </>
  );
};

export default InvoiceList;
