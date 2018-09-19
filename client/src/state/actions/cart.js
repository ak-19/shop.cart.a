import {ADD_ITEM_TO_CART,
        DELETE_ITEM_FROM_CART,
        INCREASE_ITEM_QUANTITY_IN_CART,
        DECREASE_ITEM_QUANTITY_IN_CART} from './types';

export const addItemToCart = (item) => {
  return dispacth => {
    dispacth({type: ADD_ITEM_TO_CART, payload: item});
  }
}

export const deleteItemFromCart = (id) => {
  return dispacth =>  dispacth({type: DELETE_ITEM_FROM_CART, payload: id});
}

export const increaseItemQuantity = (id) => {
  return dispacth =>  dispacth({type: INCREASE_ITEM_QUANTITY_IN_CART, payload: id});
}

export const decreaseItemQuantity = (id) => {
  return dispacth =>  dispacth({type: DECREASE_ITEM_QUANTITY_IN_CART, payload: id});
}
