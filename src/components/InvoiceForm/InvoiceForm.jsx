import React, { useState } from "react";
import "./InvoiceForm_styles.css";

const InvoiceForm = ({ itemInfo, handleClick }) => {
  let newForm;
  newForm = itemInfo.customer === "" ? true : false;

  const [formInfo, setFormInfo] = useState({
    ...itemInfo,
  });
  console.log(formInfo);

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.id]: e.target.value });
    console.log(e.target.id);
  };
  return (
    <>
      <div className="overlay"></div>
      <section className="invoice-form">
        <i onClick={handleClick} className="fas fa-times"></i>
        <div className="invoice-form-header">
          <h4 className="invoice-form-header">
            {newForm ? "New Invoice" : "Edit Invoice"}
          </h4>
          <h2 className="invoice-form-id">ID: {formInfo.id}</h2>
        </div>
        <div className="email-container">
          <label className="email-label">Recipient Email</label>
          <input
            id="email"
            onChange={handleChange}
            className="inputs"
            type="email"
            required
            placeholder="example@example.com"
            value={itemInfo.email}
          ></input>
        </div>
        <div className="name-container">
          <label className="name-label">Recipient Name</label>
          <input
            value={itemInfo.customer}
            onChange={handleChange}
            id="customer"
            className="inputs"
            type="text"
            required
            placeholder="John"
          ></input>
        </div>
        <div className="dates-container">
          <div className="issue-date-container">
            <label className="issue-label">Issued on</label>
            <input
              value={itemInfo.created}
              onChange={handleChange}
              id="created"
              className="inputs"
              type="date"
              aria-required
            ></input>
          </div>
          <div className="due-date-container">
            <label className="due-label">Due on</label>
            <input
              value={itemInfo.due}
              onChange={handleChange}
              id="due"
              className="inputs"
              type="date"
              aria-required
            ></input>
          </div>
        </div>
        <div className="items-container">
          <ul className="items-list-header">
            <li className="item-name form-items">Item</li>
            <li className="item-quantity form-items">Qty</li>
            <li className="item-price form-items">Price</li>
            <li className="item-total form-items">Total</li>
          </ul>
        </div>
        <div className="add-item-total-container">
          <span className="add-item-btn">+ Add Item</span>
          <span className="total">{formInfo.amount}</span>
        </div>
        <div className="add-note-container">
          <label className="add-note-label">Add Notes</label>
          <textarea
            value={itemInfo.note}
            onChange={handleChange}
            id="note"
            className="add-note-input"
            type="text"
          ></textarea>
        </div>
        <div className="form-actions">
          <span className="save-btn">Save</span>
          <span className="send-btn">Send</span>
        </div>
      </section>
    </>
  );
};

export default InvoiceForm;
