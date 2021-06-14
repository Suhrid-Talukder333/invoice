import React, { useState } from "react";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import InvoiceList from "../../components/InvoiceList/InvoiceList";
import "./InvoicePage_styles.css";

let id;
if (localStorage.getItem("id")) {
  id = localStorage.getItem("id");
  console.log(id);
} else {
  id = 0;
  localStorage.setItem("id", 0);
}

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
            id: (id = id + 1),
            amount: "",
            created: "",
            due: "",
            note: "",
            status: "",
            email: "",
            item: [],
          }}
          handleClick={handleClick}
        />
      ) : null}
    </>
  );
};

export default InvoicePage;
