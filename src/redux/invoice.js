// Action Types
const ADD_INVOICE = "ADD_INVOICE";
const EDIT_INVOICE = "EDIT_INVOICE";

// Actions
export const invoiceAdded = (item) => ({
  type: ADD_INVOICE,
  payload: item,
});

export const invoiceEdited = (item) => ({
  type: EDIT_INVOICE,
  payload: item,
});

//utility
const editedInvoice = (state, payload) => {
  const data = state.filter((item) => item.id !== payload.id);
  console.log(data);
  data.push(payload);
  return data;
};

// Reducer
const initial_state = [];
const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      return [...state, action.payload];
    case EDIT_INVOICE:
      return editedInvoice(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
