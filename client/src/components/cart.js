import React from 'react';
import {connect} from 'react-redux';
import CartItem from './cartitem';
import {formatCurency} from '../util/format';
import './cart.css';

class Cart extends React.Component {
  renderCartItems(){
    return this.props.cartProvider.items.map(item => {
      return (
        <CartItem  key={item.id} {...item}/>
      )
    });
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
          {this.renderCartItems()}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>€{formatCurency(this.props.cartProvider.total)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}


const mapStateToProps = (state) => ({
  cartProvider: state.cartReducer
})

export default connect(mapStateToProps)(Cart);
