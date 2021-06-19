import React, { useState, useEffect } from "react";
import "./InvoiceForm_styles.css";
import * as actions from "../../redux/invoice";
import StripePay from "../Stripe/Stripe";
import { connect } from "react-redux";

const InvoiceForm = ({
  state,
  itemInfo,
  handleClick,
  handleSave,
  handleEdit,
}) => {
  let newForm;
  newForm = itemInfo.customer === "" ? true : false;

  const [formInfo, setFormInfo] = useState({
    ...itemInfo,
  });

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.id]: e.target.value });
  };

  const handleClickSave = () => {
    if (newForm) {
      handleClick();
      handleSave(formInfo);
    } else {
      handleClick();
      handleEdit(formInfo);
    }
  };

  const handleItemDataChange = (event) => {
    let id = event.target.parentElement.parentElement.id;
    let index = event.target.id;
    let newItems = formInfo;
    newItems.items[id][index] = event.target.value;
    let total = 0;
    for (let i = 0; i < newItems.items.length; i++) {
      let x =
        parseInt(newItems.items[i].qty) * parseInt(newItems.items[i].price);
      total += x;
    }
    if (isNaN(total)) {
      total = 0;
    }
    formInfo.amount = total;
    setFormInfo({ ...formInfo, items: newItems.items });
  };

  const handleAddItem = () => {
    formInfo.items.push({ name: "", qty: 0, price: 0 });
    setFormInfo({ ...formInfo });
  };

  const handlePay = () => {
    formInfo.status = "Paid";
    handleClick();
    handleEdit(formInfo);
  };

  return (
    <>
      <div className="overlay"></div>
      <section className="invoice-form">
        <div className="close-btn">
          <i onClick={handleClick} className="fas fa-times"></i>
        </div>
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
            value={formInfo.email}
          ></input>
        </div>
        <div className="name-container">
          <label className="name-label">Recipient Name</label>
          <input
            value={formInfo.customer}
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
              value={formInfo.created}
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
              value={formInfo.due}
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
          {formInfo.items.length > 0
            ? formInfo.items.map((item, index) => (
                <ul id={`${index}`} className="items-list-header" key={index}>
                  <li className="item-name form-items">
                    <input
                      id="name"
                      onChange={handleItemDataChange}
                      type="text"
                      className="item-input"
                      value={item.name}
                    ></input>
                  </li>
                  <li className="item-quantity form-items">
                    <input
                      id="qty"
                      onChange={handleItemDataChange}
                      type="text"
                      className="item-input"
                      value={item.qty}
                    ></input>
                  </li>
                  <li className="item-price form-items">
                    <input
                      id="price"
                      onChange={handleItemDataChange}
                      type="text"
                      className="item-input"
                      value={item.price}
                    ></input>
                  </li>
                  <li className="item-total form-items">
                    <input
                      id=""
                      onChange={handleItemDataChange}
                      type="text"
                      className="item-input"
                      value={item.qty * item.price}
                    ></input>
                  </li>
                </ul>
              ))
            : null}
        </div>
        <div className="add-item-total-container">
          <span className="add-item-btn" onClick={handleAddItem}>
            + Add Item
          </span>
          <span className="total">{formInfo.amount}</span>
        </div>
        <div className="add-note-container">
          <label className="add-note-label">Add Notes</label>
          <textarea
            value={formInfo.note}
            onChange={handleChange}
            id="note"
            className="add-note-input"
            type="text"
          ></textarea>
        </div>
        <div className="form-actions">
          <span className="save-btn" onClick={handleClickSave}>
            Save
          </span>
          <span className="send-btn">
            <StripePay price={formInfo.amount} handlePay={handlePay} />
          </span>
        </div>
        <p style={{ color: "red", textAlign: "center" }}>
          4242 4242 4242 - Exp-01/last 2 digit of currentYear+1 -CVV:123
        </p>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSave: (item) => dispatch(actions.invoiceAdded(item)),
    handleEdit: (item) => dispatch(actions.invoiceEdited(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceForm);
