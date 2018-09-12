import {ADD_PRODUCT_SUCESS,
        ADD_PRODUCT_STARTED,
        ADD_PRODUCT_FAIL} from '../actions/types';


const initialState = {
  product: undefined,
  processing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_STARTED:
      return {
        ...state,
        processing: true
      };
    case ADD_PRODUCT_SUCESS:
      return {
        ...state,
        processing: false,
        product: action.payload
      };
      case ADD_PRODUCT_FAIL:
        return {
          ...state,
          processing: false
        };
    default:
      return {...state};
  }
}
