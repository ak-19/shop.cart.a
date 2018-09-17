import React from 'react';

import './cart.css';
class Cart extends React.Component {
  deleteItem(e){
    console.log('Delete item stub');
  }
  render () {
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T-Shirt Y</td>
            <td>1 <i className="fas fa-plus"></i> <i className="fas fa-minus"></i></td>
            <td>21.21</td>
            <td>21.21</td>
            <td><div className='fa fa-window-close' onClick={e => this.deleteItem(e)}/></td>
          </tr>
          <tr>
            <td>T-Shirt Y</td>
            <td>1 <i className="fas fa-plus"></i> <i className="fas fa-minus"></i></td>
            <td>21.21</td>
            <td>21.21</td>
            <td><div className='fa fa-window-close' onClick={e => this.deleteItem(e)}/></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>42.42</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Cart;
