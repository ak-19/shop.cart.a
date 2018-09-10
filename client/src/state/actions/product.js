import {GET_PRODUCTS, PRODUCTS_LOADING, ERROR} from './types';
import axios from 'axios';

export const getProducts = () => {
  return dispatch => {
    dispatch({type: PRODUCTS_LOADING});
    axios
        .get('/api/product/getall')
        .then(res => {
            dispatch({type: GET_PRODUCTS, payload: res.data});
        })
        .catch(e => dispatch({type: ERROR, payload: e}));
  }
}
