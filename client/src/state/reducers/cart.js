import {ADD_ITEM_TO_CART,
        DELETE_ITEM_FROM_CART,
        INCREASE_ITEM_QUANTITY_IN_CART,
        DECREASE_ITEM_QUANTITY_IN_CART} from '../actions/types';

const defaultState = {
  items: [],
  total: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return addItemToCart(state, action);
    case DELETE_ITEM_FROM_CART:
      return deleteItemAndReturnNewState(state, action);
    case INCREASE_ITEM_QUANTITY_IN_CART:
      return increaseItemQuantity(state, action);
    case DECREASE_ITEM_QUANTITY_IN_CART:
      return decreaseItemQuantity(state, action);
    default:
      return {...state}
  }
}


function increaseItemQuantity(state, action){
  const id = action.payload;
  const founditem = state.items.find(i => i.id === id);
  let {total} = state;
  if (founditem) {
    founditem.count++;
    founditem.total+= founditem.price;
    total += founditem.price;
  }

  return {
    ...state,
    items: [...state.items],
    total
  };
}

function decreaseItemQuantity(state, action){
  const id = action.payload;
  const founditemIndex = state.items.findIndex(i => i.id === id);
  let {total} = state;
  if (founditemIndex !== -1) {
    const founditem = state.items[founditemIndex];
    founditem.count--;
    founditem.total -= founditem.price;
    total -= founditem.price;
    if (founditem.count < 1) {
      state.items.splice(founditemIndex, 1);
    }

    total = Math.max(0, total)
  }

  return {
    ...state,
    items: [...state.items],
    total
  };
}

function addItemToCart(state, action){
  const item = action.payload;
  const founditem = state.items.find(i => i.id === item.id);
  let total = state.total;
  if(founditem){
    founditem.count++;
    founditem.total+= item.price;
  }else{
    state.items.push({id: item.id, name: item.name, count: 1, price: item.price, total: item.price});
  }
  total += item.price;
  return {
    ...state,
    items: [...state.items],
    total
  };
}

function deleteItemAndReturnNewState(state, action){
  const id = action.payload;
  const items =  state.items.filter(item => item.id !== id);
  const total = items.reduce((prev, curr) => prev + curr.price * curr.count, 0);
  return {
    ...state,
    items,
    total
  }
}
