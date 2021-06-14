import React, { useState } from "react";
import Invoice from "../Invoice/Invoice";
import "./InvoiceList_styles.css";

const InvoiceList = () => {
  const [invoiceListInfo, setInvoiceListInfo] = useState([
    {
      customer: "John",
      id: 0,
      amount: "$100",
      created: "May 3, 2021",
      due: "In 2 Days",
      note: "Give him as soon as you can don't forget this",
      status: "Due",
    },
    {
      customer: "sally",
      id: 1,
      amount: "$1020",
      created: "May 3, 2021",
      due: "In 2 Days",
      note: "Give him as soon as you can don't forget this",
      status: "Paid",
    },
    {
      customer: "shakib",
      id: 2,
      amount: "$10000",
      created: "May 3, 2021",
      due: "In 2 Days",
      note: "Give him as soon as you can don't forget this",
      status: "Pending",
    },
  ]);
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
        {invoiceListInfo.map((item) => (
          <Invoice
            key={item.id}
            invoiceListInfo={invoiceListInfo}
            item={item}
          />
        ))}
      </ul>
    </>
  );
};

export default InvoiceList;
