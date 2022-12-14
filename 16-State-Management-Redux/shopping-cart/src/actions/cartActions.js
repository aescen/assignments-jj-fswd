import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
} from './action-types/cartActions';

//add cart action
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: { id },
});
//remove item action
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
});
//subtract qt action
export const subtractQuantity = (id) => ({
  type: SUB_QUANTITY,
  payload: { id },
});
//add qt action
export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  payload: { id },
});

// OPTIONAL, NOT MANDATORY
export const addShipping = () => ({
  type: ADD_SHIPPING,
  payload: true,
});

export const substractShipping = () => ({
  type: SUB_SHIPPING,
  payload: true,
});
