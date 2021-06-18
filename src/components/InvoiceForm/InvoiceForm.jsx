import React, { useState } from "react";
import "./InvoiceForm_styles.css";
import * as actions from "../../redux/invoice";
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
      handleSave(formInfo);
    } else {
      handleEdit(formInfo);
    }
  };

  const handleItemDataChange = (event) => {
    let id = event.target.parentElement.parentElement.id;
    let index = event.target.id;
    formInfo.items[id][index] = event.target.value;
    event.target.value = formInfo.items[id][index];
    // setFormInfo({ ...formInfo, [e.target.id]:  });
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
          {formInfo.items.map((item, index) => (
            <ul id={`${index}`} className="items-list-header" key={item.name}>
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
          ))}
        </div>
        <div className="add-item-total-container">
          <span className="add-item-btn">+ Add Item</span>
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
          <span className="send-btn">Send</span>
        </div>
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
