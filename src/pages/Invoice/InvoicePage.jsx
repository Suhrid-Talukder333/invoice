import React from "react";
import InvoiceList from "../../components/InvoiceList/InvoiceList";
import "./InvoicePage_styles.css";

const InvoicePage = () => {
  return (
    <>
      <section className="invoice-container">
        <div className="invoice-container-header">
          <h1>INVOICE</h1>
          <span className="add-invoice-btn">New Invoice +</span>
        </div>
        <div className="invoice-list-container">
          <InvoiceList />
        </div>
      </section>
    </>
  );
};

export default InvoicePage;
