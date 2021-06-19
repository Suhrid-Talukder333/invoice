import React, { useState } from "react";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import InvoiceList from "../../components/InvoiceList/InvoiceList";
import "./InvoicePage_styles.css";

let Initial_id = 0;

const InvoicePage = () => {
  const [formClick, setFormClick] = useState(false);
  const handleClick = () => {
    setFormClick(!formClick);
  };
  return (
    <>
      <section className="invoice-container">
        <div className="invoice-container-header">
          <h1>INVOICE</h1>
          <span className="add-invoice-btn" onClick={handleClick}>
            + New Invoice
          </span>
        </div>
        <div className="invoice-list-container">
          <InvoiceList />
        </div>
      </section>
      {formClick ? (
        <InvoiceForm
          itemInfo={{
            customer: "",
            id: ++Initial_id,
            amount: 0,
            created: "",
            due: "",
            note: "",
            status: "",
            email: "",
            items: [],
          }}
          handleClick={handleClick}
        />
      ) : null}
    </>
  );
};

export default InvoicePage;
